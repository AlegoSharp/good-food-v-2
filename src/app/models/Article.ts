export class Article {
    idArticle: number
    libelleArticle: string
    descriptionArticle: string
    urlImgArticle: string
    stockArticle: number
    prixArticleHt: number
    tva: number
    idCategorieArticle: number
    idFranchise: number
    estMenu: string

    constructor() 
    { 

    }

    public init_empty() : void{
        this.idArticle = 0;

        this.stockArticle = 100;
        this.prixArticleHt = 0;
        this.tva = 20;

        this.libelleArticle = '0';
        this.descriptionArticle = '0';
        this.urlImgArticle = '0';


        this.idCategorieArticle = 0;
        this.idFranchise = 0;

        this.estMenu = '0';
    }
}
/*


*/