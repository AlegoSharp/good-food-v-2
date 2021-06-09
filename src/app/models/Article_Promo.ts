import { Aliases } from "./models-ressources/Aliases";

export class Article_Promo {
    public a_idPromoArticle: number;
    public b_idArticle: number;
    public c_idPromo: number;
    public d_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idPromoArticle = 0;
        this.b_idArticle = 0;
        this.c_idPromo = 0;
        this.d_estActive = 0;
    }
}