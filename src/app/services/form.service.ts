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
    public headerDictLogin: {
        'Content-Type': 'application/json',
        'email': 'quentin.alegos@gmail.com',
        'password': 'hHxL3zXapXz3JWW',
    };

    public headerDictTAMRR(token: string): object{
        const headerDictLogin = {
            'Content-Type': 'application/json',
            Authorization: 'Bearer' + ' ' + token.replace('"', '').replace('"', '')
        };
        return headerDictLogin;
    }

    public headerDictNone(): object{
        const headerDictLogin = {
            'Content-Type': 'application/json'
        };
        return headerDictLogin;
    }
    constructor(
        private http: HttpClient,
        private env: EnvService,
        private storage: StorageService,
        private util: UtilityService
    ) {
    }

    /**
     * Gets an instance of Form from an object
     * Récupère une instance de Form à partir d'un objet
     * @template T                  * Type of Objet to parse / Type de l'objet à parser
     * @param obj                   * The object to parse / L'objet à parser
     * @param [fixedNameClassName]  * The classname objet to force it / Le nom de la class de l'objet pour le fixer
     * @returns form from object    * An instance of Form / Une instance du model Form
     */
    public getFormFromObject<T>(obj: T, fixedNameClassName = ''): Form {
        const form = new Form();
        form.title = fixedNameClassName === '' ? (obj as any).constructor.name : fixedNameClassName;
        form.properties = this.getObjectProps<T>(obj, fixedNameClassName);
        return form;
    }

    /**
     * Sets the value of an object property to the corresponding FormProperty
     * Définit la valeur de la propriété d'un objet à partir d'un objet FormProperty
     * @template T                  * Type of Objet to parse / Type de l'objet à parser
     * @param obj                   * The object to parse / L'objet à parser
     * @param propsArray            * The array of FormProperty of the object / Le tableau de FormProperty de l'objet
     * @returns object props        * L'objet
     */
    public setObjectProps<T>(obj: T, propsArray: Array<FormProperty>): T {
        propsArray.forEach(element => {
            obj[element.nom] = element.value;
        });
        return obj;
    }

    // Permet de remonter les properties d'un objet sous forme de tableau
    // La class FormProperty contient le type / le nom de la property et sa valeur

    /**
     * Gets object props as an Array
     * Permet de remonter les properties d'un objet sous forme de tableau
     * @template T                  * Type of Objet to parse / Type de l'objet à parser
     * @param obj                   * The object to parse / L'objet à parser
     * @param [fixedNameClassName]  * The classname objet to force it / Le nom de la class de l'objet pour le fixer
     * @returns object props        * Array of properties of the object / Tableau de propriété de l'objet en paramètre
     */
    public getObjectProps<T>(obj: T, fixedNameClassName = ''): Array<FormProperty> {
        const array = Object.getOwnPropertyNames(obj);
        const result = new Array<FormProperty>();
        const modelName = fixedNameClassName === '' ? (obj as any).constructor.name : fixedNameClassName;
        array.forEach(element => {
            if (element !== 'options'){
                const prop = new FormProperty();
                const options = (obj as any).options;
                prop.nom = element;
                prop.alias = options.ConvivialsNames[element]; // this.getConvivialName(modelName, element);
                console.log(prop);
                if (prop.alias === '') {
                    prop.alias = prop.alias === '' ? element : '';
                }
                prop.type = typeof (obj[element]);
                prop.value = obj[element];
                prop.externalRouteRessource = options.CustomRoutes[element]; // this.getCustomRoute(modelName, prop.nom);
                result.push(prop);
            }
        });
        return result;
    }
    getList(route: string, securitymode: 'none'|'bearer'|'withCredentials' = 'none') {
        const requestOptions = {
            headers: new HttpHeaders(this.getHeaderFromSecurityMode(securitymode)),
            withCredentials: true
        };

        return this.http.get(this.env.API_URL + route, requestOptions);
    }

    getDetail(id: string, route: string, securitymode: 'none'|'bearer'|'withCredentials' = 'none') {
        const requestOptions = {
            headers: new HttpHeaders(this.getHeaderFromSecurityMode(securitymode)),
            withCredentials: true
        };

        return this.http.get(this.env.API_URL + route + '/' + id, requestOptions);
    }
    private getHeaderFromSecurityMode(securitymode: 'none' |'bearer' |'withCredentials'= 'none'): any{
        let headerDict;
        const token = this.util.token;
        switch (securitymode) {
            case 'none':
                headerDict = this.headerDictNone;
                break;
            case 'bearer':
                headerDict = this.headerDictTAMRR(token);
                break;
            case 'none':
                headerDict = this.headerDictLogin;
                break;
            default:
                headerDict = this.headerDictNone;
                break;
        }
        return headerDict;
    }

    postObject(route: string, body: any, token = '') {
        let headerDict;
        if (token !== '') {
            headerDict = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + ' ' + token.replace('"', '').replace('"', '')
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
        return this.http.post(this.env.API_URL + route + '/creer', body, requestOptions);
    }

    postEditObject(route: string, body: any, token: string) {
        let headerDict;
        if (token !== '') {
            headerDict = {
                'Content-Type': 'application/json',
                Authorization: 'Bearer' + ' ' + token.replace('"', '').replace('"', '')
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
        console.log('test');
        return this.http.patch(this.env.API_URL + route + '/modifier', body, requestOptions);
    }
}
