import { Injectable } from '@angular/core';
import { Form } from '../models/Form';
import { FormProperty } from '../models/FormProperty';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { EnvService } from './env.service';
import { Aliases } from 'src/app/models/models-ressources/Aliases'
@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(
        private http: HttpClient,
        private env: EnvService) { }

    public getFormFromObject<T>(obj: T, fixedNameClassName=""): Form{
        let form = new Form();
        form.title = fixedNameClassName === "" ? (<any>obj).constructor.name : fixedNameClassName;
        form.properties = this.getObjectProps<T>(obj,fixedNameClassName)
        return form;
    }

    public setObjectProps<T>(obj: T, propsArray:Array<FormProperty>): Object{
        propsArray.forEach(element => {
            obj[element.nom] = element.value;
        });
        return obj;
    }

    // Permet de remonter les properties d'un objet sous forme de tableau
    // La class FormProperty contient le type / le nom de la property et sa valeur
    public getObjectProps<T>(obj: T, fixedNameClassName=""): Array<FormProperty>{
        let array = Object.getOwnPropertyNames(obj);
        let result = new Array<FormProperty>();
        let modelName = fixedNameClassName === "" ? (<any>obj).constructor.name : fixedNameClassName;
        array.forEach(element => {
            let prop = new FormProperty();
            prop.nom = element;
            prop.alias = this.getConvivialName(modelName, element);
            prop.alias === "" ? element : prop.alias;
            prop.type = typeof(obj[element]);
            prop.value = obj[element];
            prop.externalRouteRessource = this.getCustomRoute(modelName, element);
            
            result.push(prop);
        });
        return result;
    }

    getDetail(id:string, route:string) {
        return this.http.get(this.env.API_URL + route + "/" + id );
    }
    
    getList(route:string) {
        return this.http.get(this.env.API_URL + route);
    }

    postObject(route:string, body: any) {
        const headerDict = {
            'Content-Type': 'application/json',
        };
        const requestOptions = {                                                                                                                                                                                 
            headers: new HttpHeaders(headerDict),
        };
        return this.http.post(this.env.API_URL + route + "/create",body, requestOptions);
    }

    postEditObject(route:string, body: any) {
        const headerDict = {
            'Content-Type': 'application/json',
        };
        const requestOptions = {                                                                                                                                                                                 
            headers: new HttpHeaders(headerDict),
        };
        return this.http.patch(this.env.API_URL + route + "/modify",body, requestOptions);
    }

    public getCustomRoute(model: string, propertyName: string): string {
        switch (model) {
            case 'Categorie_Article':
                return ""

            case 'Article':
                return Aliases.articleCustomRoutes[propertyName];

            case 'Utilisateur':
                return Aliases.userCustomRoutes[propertyName];
            
            case 'Promo':
                return Aliases.promosCustomRoutes[propertyName];

            default:    
                return '';
        }
    }
    public getConvivialName(model: string, propertyName: string): string {
        switch (model) {
            case 'Categorie_Article':
                return Aliases.categorieArticleConvivialNames[propertyName];

            case 'Article':
                return Aliases.articleConvivialNames[propertyName];

            case 'Utilisateur':
                return Aliases.userConvivialNames[propertyName];

            case 'Role':
                return Aliases.roleConvivialNames[propertyName];

            case 'Promo':
                return Aliases.promosConvivialNames[propertyName];

            default:
                return '';
        }
    }
}