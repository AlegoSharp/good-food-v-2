import { Aliases } from "./models-ressources/Aliases";

export class Article_Promo {
    public idArticle: number;
    public reduction: number;

    constructor(){}

    public init_empty(): void{
        this.idArticle = 0;
        this.reduction = 0;
    }
}