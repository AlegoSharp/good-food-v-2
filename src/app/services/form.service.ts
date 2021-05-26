import { Injectable } from '@angular/core';
import { Form } from '../models/Form';
import { FormProperty } from '../models/FormProperty';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EnvService } from './env.service';
import { Aliases } from 'src/app/models/models-ressources/Aliases';
import { StorageService } from './storage.service';
import { UtilityService } from './utility.service';
@Injectable({
    providedIn: 'root',
})

export class FormService {
    constructor(
        private http: HttpClient,
        private env: EnvService,
        private storage: StorageService,
        private util:UtilityService
    ) { }

    public getFormFromObject<T>(obj: T, fixedNameClassName = ''): Form {
        const form = new Form();
        form.title = fixedNameClassName === '' ? (obj as any).constructor.name : fixedNameClassName;
        form.properties = this.getObjectProps<T>(obj, fixedNameClassName);
        return form;
    }

    public setObjectProps<T>(obj: T, propsArray: Array<FormProperty>): T {
        propsArray.forEach(element => {
            obj[element.nom] = element.value;
        });
        return obj;
    }

    // Permet de remonter les properties d'un objet sous forme de tableau
    // La class FormProperty contient le type / le nom de la property et sa valeur
    public getObjectProps<T>(obj: T, fixedNameClassName = ''): Array<FormProperty> {
        const array = Object.getOwnPropertyNames(obj);
        const result = new Array<FormProperty>();
        const modelName = fixedNameClassName === '' ? (obj as any).constructor.name : fixedNameClassName;
        array.forEach(element => {
            const prop = new FormProperty();
            prop.nom = element;
            prop.alias = this.getConvivialName(modelName, element);
            console.log(prop);
            if (prop.alias === '') {
                prop.alias = prop.alias === '' ? element : '';
            }
            prop.type = typeof (obj[element]);
            prop.value = obj[element];
            prop.externalRouteRessource = this.getCustomRoute(modelName, prop.nom);
            result.push(prop);
        });
        return result;
    }

    getDetail(id: string, route: string) {

        return this.http.get(this.env.API_URL + route + '/' + id);
    }

    getList(route: string) {
        let headerDict = undefined;
        const token = this.util.token;
        console.log(token.replace('"',''));
        if (token !== '' && token) {
            headerDict = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + token.replace('"','').replace('"','')
            };
        } else {
            headerDict = {
                'Content-Type': 'application/json',
            };
        }

        const requestOptions = {
            headers: new HttpHeaders(headerDict),
            withCredentials: true
        };

        return this.http.get(this.env.API_URL + route, requestOptions);
    }

    postObject(route: string, body: any, token = '') {
        let headerDict = undefined;
        if (token !== '') {
            headerDict = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer' + ' ' + token
            };
        } else {
            headerDict = {
                'Content-Type': 'application/json',
            };
        }
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
            withCredentials: true
        };
        return this.http.post(this.env.API_URL + route + '/create', body, requestOptions);
    }

    postEditObject(route: string, body: any) {
        const headerDict = {
            'Content-Type': 'application/json',
        };
        const requestOptions = {
            headers: new HttpHeaders(headerDict),
        };
        return this.http.patch(this.env.API_URL + route + '/modify', body, requestOptions);
    }

    public getCustomRoute(model: string, propertyName: string): string {
        switch (model) {
            case 'Categorie_Article':
                return Aliases.categorieArticleCustomRoutes[propertyName];

            case 'Article':
                return Aliases.articleCustomRoutes[propertyName];

            case 'Utilisateur':
                return Aliases.userCustomRoutes[propertyName];

            case 'Promo':
                return Aliases.promosCustomRoutes[propertyName];

            case 'Role':
                return Aliases.roleCustomRoutes[propertyName];

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
