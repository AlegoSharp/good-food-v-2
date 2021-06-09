import { Injectable } from '@angular/core';
import { Adresse_Fournisseur } from '../models/Adresse_Fournisseur';
import { Adresse_Utilisateur } from '../models/Adresse_Utilisateur';
import { Article } from '../models/Article';
import { Article_Allergene } from '../models/Article_Allergene';
import { Allergene } from '../models/Allergene';
import { Article_Promo } from '../models/Article_Promo';
import { Categorie_Article } from '../models/Categorie_Article';
import { Commande } from '../models/Commande';
import { Fournisseur } from '../models/Fournisseur';
import { Franchise } from '../models/Franchise';
import { Groupe_Franchise } from '../models/Groupe_Franchise';
import { LigneCommande } from '../models/LigneCommande';
import { Aliases } from '../models/models-ressources/Aliases';
import { Promo } from '../models/Promo';
import { Utilisateur } from '../models/Utilisateur';

@Injectable({
    providedIn: 'root',
})
export class UtilityService{


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
        Article_Promo: new Article_Promo(),
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


}
