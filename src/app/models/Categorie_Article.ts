export class Categorie_Article {
    public idCategorieArticle: number;
    public libelleCategorieArticle: string;
    public estActive: number;

    constructor(){}

    public init_empty(): void{
        this.idCategorieArticle = 0;
        this.libelleCategorieArticle = '0';
        this.estActive = 0;
    }
}
