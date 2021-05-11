import { Injectable } from '@angular/core';
import { Form } from '../models/Form';
import { FormProperty } from '../models/FormProperty';
import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root'
})
export class FormService { 

    constructor(
        private http: HttpClient,
        private env: EnvService,
    ) { }

    public getFormFromObject<T>(obj: T): Form{
        let form = new Form();
        form.title = (<any>obj).constructor.name;
        form.properties = this.getObjectProps<T>(obj)
        return form;
    }

    public getObjectProps<T>(obj: T): Array<FormProperty>{
        let array = Object.getOwnPropertyNames(obj).sort();
        let result = new Array<FormProperty>();
        array.forEach(element => {
            let prop = new FormProperty();
            prop.nom = element;
            prop.type = typeof(obj[element]);
            prop.value = obj[element];
            result.push(prop);
        });
        return result;
    }

    getDetail(id:string, route:string) {
        return this.http.get(this.env.API_URL + route + "/" + id );
    }
    
    getList(route:string) {
        return this.http.get(this.env.API_URL + route + "/");
    }

    postObject(route:string, body: any) {
        console.log(JSON.stringify(body));
        const headers= new HttpHeaders()
            .set('Content-Type', 'application/json')
            .set('Access-Control-Allow-Origin', '*')
        return this.http.post(this.env.API_URL + route + "/create",body,{
            headers: headers,
        });
    }
}