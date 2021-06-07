import { Aliases } from "./models-ressources/Aliases";

export class Categorie_Article {
    public idCategorieArticle: number;
    public libelleCategorieArticle: string;
    public estActive: number;

    constructor(){}

    private options = {
        ConvivialsNames: Aliases.categorieArticleConvivialNames,
        CustomRoutes: Aliases.categorieArticleCustomRoutes,
    };

    public init_empty(): void{
        this.idCategorieArticle = 0;
        this.libelleCategorieArticle = '0';
        this.estActive = 0;
    }
}
