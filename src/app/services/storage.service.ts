import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Article } from '../models/Article';

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

    public async removeItemFromBasket(article: Article){
        let basket =  await this.getObject("basket").then(value => {
            return (value as unknown) as Array<Article>;
        });
        console.log(basket)
        if(basket !== undefined){
            basket = basket.filter(w=>w.ref !== article.ref);
            await this.setObject("basket",basket);
        }

    }
    public async addItemToBasket(article: Article){
        let basket = new Array<Article>();
        let tempBasket = await this.getObject("basket").then(value => {
            return (value as unknown) as Array<Article>;
        });
        if(tempBasket !== null){
            basket = tempBasket;
        } 
        basket.push(article);
        await this.setObject("basket", basket);
    }
}