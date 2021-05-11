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
        console.log(valueStringify)
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
        console.log(basket)
        if(basket !== undefined){
            basket = basket.filter(w=>w.article.idArticle !== ligneCommande.article.idArticle);
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
        basket.push(ligneCommande);
        await this.setObject("basket", basket);
    }
}