import { Aliases } from "./models-ressources/Aliases";

export class Article_Promo {
    public idArticle: number;
    public reduction: number;

    constructor(){}
    private options = {
        ConvivialsNames: Aliases.allergeneConvivialNames,
        CustomRoutes: Aliases.allergeneCustomRoutes,
    };
    public init_empty(): void{
        this.idArticle = 0;
        this.reduction = 0;
    }
}