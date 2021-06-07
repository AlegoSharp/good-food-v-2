export class Promo {
    public a_idPromo: number;
    public b_estActive: number;
    public c_idArticle: number;
    public d_libellePromo: string;
    public e_reduction: number;

    constructor(){}

    public init_empty(): void{
        this.a_idPromo = 0;
        this.b_estActive = 0;
        this.c_idArticle = 0;
        this.d_libellePromo = '0';
        this.e_reduction = 0;
    }
}
