export class Promo {
    public idArticle: number;
    public idPromo: number;
    
    public estActive: number;

    public libellePromo: string;

    constructor(){}

    public init_empty() : void{
        this.idArticle = 0;
        this.idPromo = 0;
        this.estActive = 0;
        this.libellePromo = '0';
    }
}