import { Injectable } from '@angular/core';
import { Adresse_Fournisseur } from '../models/Adresse_Fournisseur';
import { Adresse_Utilisateur } from '../models/Adresse_Utilisateur';
import { Article } from '../models/Article';
import { Article_Allergene } from '../models/Article_Allergene';
import { Allergene } from '../models/Allergene';
import { Categorie_Article } from '../models/Categorie_Article';
import { Commande } from '../models/Commande';
import { Fournisseur } from '../models/Fournisseur';
import { Franchise } from '../models/Franchise';
import { Groupe_Franchise } from '../models/Groupe_Franchise';
import { LigneCommande } from '../models/LigneCommande';
import { Aliases } from '../models/models-ressources/Aliases';
import { Promo } from '../models/Promo';
import { Utilisateur } from '../models/Utilisateur';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { EnvService } from './env.service';

@Injectable({
    providedIn: 'root',
})
export class UtilityService{

    constructor(
        private http: HttpClient,
        private env: EnvService,
    ) { }
    /**
     * Token GLOBAL
     */
    public token: string;

    /**
     * FranchiseSelected GLOBAL
     */
    public franchiseSelected: Franchise;

    /**
     * Categories GLOBAL
     */
    public categoriesArticles: Categorie_Article[];


    /**
     * Cache du storage basket GLOBAL
     */
    public backetCache: LigneCommande[];

    public Store: any = {
        Article: new Article(),
        Utilisateur: new Utilisateur(),
        Adresse_Fournisseur: new Adresse_Fournisseur(),
        Adresse_Utilisateur: new Adresse_Utilisateur(),
        Allergene: new Allergene(),
        Article_Allergene: new Article_Allergene(),
        Categorie_Article: new Categorie_Article(),
        Commande: new Commande(),
        Fournisseur: new Fournisseur(),
        Franchise: new Franchise(),
        Groupe_Franchise: new Groupe_Franchise(),
        LigneCommande: new LigneCommande(),
        Promo: new Promo(),
        Aliases: new Aliases(),
    };

    /**
     * User connecté
     */
    public userConnected: Utilisateur;

    /**
     * Address livraison
     */
    public addressLivr: Adresse_Utilisateur;

    /**
     * Address facturation
     */
    public addressFact: Adresse_Utilisateur;

    /**
     * Franchises in basket
     */
    public franchisesInBasket: Array<number>;

    public refreshInterval = setInterval(() => {
        if (this.userConnected !== undefined){
            this.refresh(this.userConnected.d_emailUtilisateur).toPromise().then(response => {
                this.token = (response as any) as string;
            }).catch(reason => {
                this.token = '';
                this.userConnected = undefined;
            });
            console.log('refresh');
        }
    }, 120000);

    /**
     * Logins http request
     * Requete http pour connecter l'utilisateur
     * @param email email
     * @returns Promise
     */
    refresh(email: string) {
        const headerDictLogin = {
            Authorization: 'Bearer' + ' ' + this.token.replace('"', '').replace('"', '')
        };
        const requestOptions = {
            headers: new HttpHeaders(headerDictLogin),
            withCredentials: true,
            responseType: 'text' as any
        };
        return this.http.get(this.env.API_URL + 'Utilisateur/refresh/' + email, requestOptions);
    }

}
