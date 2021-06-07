export class Categorie_Article {
    public a_idCategorieArticle: number;
    public b_libelleCategorieArticle: string;
    public c_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idCategorieArticle = 0;
        this.b_libelleCategorieArticle = '0';
        this.c_estActive = 0;
    }
}
