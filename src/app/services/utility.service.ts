import { Injectable } from "@angular/core";
import { Categorie_Article } from "../models/Categorie_Article";
import { Franchise } from "../models/Franchise";

@Injectable()
export class UtilityService{

    public token: string;
    public franchiseSelected: Franchise;
    public categoriesArticles: Categorie_Article[];
}