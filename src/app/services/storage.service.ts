import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { LigneCommande } from '../models/LigneCommande';

const { Storage } = Plugins;
@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor() { }

    public async setObject(key: string, value: any) {
        let valueStringify = JSON.stringify(value);
        await Storage.set({ key, value: valueStringify });
    }

    public getObjectValue(key: string): {value: any}{
        let result;
        this.getObject(key).then(value => result = value);
        return result;
    }

    public async getObject(key: string): Promise<{ value: any }> {
        const ret = await Storage.get({ key });
        return JSON.parse(ret.value);
    }

    public async removeItemFromBasket(ligneCommande: LigneCommande){
        let basket =  await this.getObject("basket").then(value => {
            return (value as unknown) as Array<LigneCommande>;
        });
        if(basket !== undefined){
            basket = basket.filter(w=>w.article.idArticle !== ligneCommande.article.idArticle);
            await this.setObject("basket",basket);
        }
    }

    public async replaceItemFromBasket(ligneCommande: LigneCommande){
        let basket =  await this.getObject("basket").then(value => {
            return (value as unknown) as Array<LigneCommande>;
        });
        if(basket !== undefined){
            
            let ligne = basket.findIndex(w=>w.article.idArticle === ligneCommande.article.idArticle);
            basket[ligne] = ligneCommande;
            await this.setObject("basket",basket);
        }
    }

    public async addItemToBasket(ligneCommande: LigneCommande){
        let basket = new Array<LigneCommande>();
        let tempBasket = await this.getObject("basket").then(value => {
            return (value as unknown) as Array<LigneCommande>;
        });
        if(tempBasket !== null){
            basket = tempBasket;
        }
        let itemExisitingIndex = basket.findIndex(ligne => ligne.article?.idArticle === ligneCommande.article.idArticle);
        if(itemExisitingIndex >= 0){
            let currentQty = basket[itemExisitingIndex].quantiteArticle;
            let addinQty = ligneCommande.quantiteArticle as number;
            let finalQty = 0;
            finalQty = Number.parseInt(currentQty.toString()) + Number.parseInt(addinQty.toString());
            basket[itemExisitingIndex].quantiteArticle = finalQty;
        }else{
            basket.push(ligneCommande);
        }
        await this.setObject("basket", basket);
    }
}