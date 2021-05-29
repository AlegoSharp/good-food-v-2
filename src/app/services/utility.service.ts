import { Injectable } from "@angular/core";
import { Categorie_Article } from "../models/Categorie_Article";
import { Franchise } from "../models/Franchise";

@Injectable()
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
}