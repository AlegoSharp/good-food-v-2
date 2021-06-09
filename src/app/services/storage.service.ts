import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LigneCommande } from '../models/LigneCommande';
import { UtilityService } from './utility.service';

const { Storage } = Plugins;
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(private util: UtilityService ) { }


    /**
     * Sets a value in the localstorage witht specify a key.
     * Ajoute une donnée au localstorage indentifié par une clé
     * @param key               * Key of the stored value / Clé de la valeur
     * @param value             * Value to store / Valeur à stockée
     */
    public async setObject(key: string, value: any) {
        const valueStringify = JSON.stringify(value);
        await Storage.set({ key, value: valueStringify });
    }

    /**
     * Gets the value of the specified key in the localstorage
     * Récupère la valeur de la clé spécifiée dans le localstorage
     * @param key               * Key of the stored value / Clé de la valeur
     * @returns object value    * The object stored or UNDEFINED / L'objet stocké à l'emplacement de la clé Ou UNDEFINED
     */
    public getObjectValue(key: string): {value: any}{
        let result;
        this.getObject(key).then(value => result = value);
        return result;
    }

    /**
     * Gets the value of the specified key in the localstorage parsed as JSON object
     * Récupère la valeur de la clé spécifiée dans le localstorage parsé en objet JSON
     * @param key               * Key of the stored value / Clé de la valeur
     * @returns object          * The object stored or UNDEFINED / L'objet stocké à l'emplacement de la clé Ou UNDEFINED
     */
    public async getObject(key: string): Promise<{ value: any }> {
        const ret = await Storage.get({ key });
        return JSON.parse(ret.value);
    }


    /**
     * Removes ligne_commande from basket
     * Supprime une ligne_commande du panier
     * @param ligneCommande     * LigneCommande to delete / Ligne_commande à supprimer
     */
    public async removeItemFromBasket(ligneCommande: LigneCommande){
        if (this.util.franchisesInBasket === undefined){
            this.util.franchisesInBasket = [];
        }
        if (!this.util.franchisesInBasket.includes(ligneCommande.article.c_idFranchise)){
            this.util.franchisesInBasket.push(ligneCommande.article.c_idFranchise);
        }
        let count = 0;
        let basket =  await this.getObject('basket').then(value => {
            ((value as unknown) as Array<LigneCommande>).forEach(element => {
                if (element.article.c_idFranchise === ligneCommande.article.c_idFranchise){
                    count++;
                }
            });
            return (value as unknown) as Array<LigneCommande>;
        });
        if (basket !== undefined){
            basket = basket.filter(w => w.article.a_idArticle !== ligneCommande.article.a_idArticle);
            await this.setObject('basket', basket);
            this.util.backetCache = basket;
            if (count === 1){
                this.util.franchisesInBasket = this.util.franchisesInBasket.filter(x => x === ligneCommande.article.c_idFranchise);
            }
        }
    }

    /**
     * Replace ligne_commande from basket (edit item)
     * Remplace une ligne_commande du panier (edit item)
     * @param ligneCommande    * LigneCommande to replace / Ligne_commande à remplacer
     */
    public async replaceItemFromBasket(ligneCommande: LigneCommande){
        const basket =  await this.getObject('basket').then(value => {
            return (value as unknown) as Array<LigneCommande>;
        });
        if (basket !== undefined){
            const ligne = basket.findIndex(w => w.article.a_idArticle === ligneCommande.article.a_idArticle);
            basket[ligne] = ligneCommande;
            await this.setObject('basket', basket);
            this.util.backetCache = basket;
        }
    }


    /**
     * Adds ligne_commande to basket
     * Ajouter une ligne_commande au panier
     * @param ligneCommande ligne
     */
    public async addItemToBasket(ligneCommande: LigneCommande){

        if (this.util.franchisesInBasket === undefined){
            this.util.franchisesInBasket = [];
        }

        if (!this.util.franchisesInBasket.includes(ligneCommande.article.c_idFranchise)){
            this.util.franchisesInBasket.push(ligneCommande.article.c_idFranchise);
        }

        let basket = new Array<LigneCommande>();
        const tempBasket = await this.getObject('basket').then(value => {
            return (value as unknown) as Array<LigneCommande>;
        });
        if (tempBasket !== null){
            basket = tempBasket;
        }
        const itemExisitingIndex = basket.findIndex(ligne => ligne.article?.a_idArticle === ligneCommande.article.a_idArticle);
        if (itemExisitingIndex >= 0){
            const currentQty = basket[itemExisitingIndex].d_quantiteArticle;
            const addinQty = ligneCommande.d_quantiteArticle as number;
            let finalQty = 0;
            finalQty = Number.parseInt(currentQty.toString(), 2) + Number.parseInt(addinQty.toString(), 2);
            basket[itemExisitingIndex].d_quantiteArticle = finalQty;
        }else{
            basket.push(ligneCommande);
        }
        this.util.backetCache = basket;
        await this.setObject('basket', basket);
    }
}
