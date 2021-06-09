// tslint:disable-next-line: class-name
export class Article_Allergene {
    public a_idAllergeneArticle: number;
    public b_idArticle: number;
    public c_idAllergene: number;
    public d_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idAllergeneArticle = 0;
        this.b_idArticle = 0;
        this.c_idAllergene = 0;
        this.d_estActive = 0;
    }
}