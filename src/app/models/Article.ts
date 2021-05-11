export class Article {
    idArticle: number
    libelleArticle: string
    descriptionArticle: string
    urlImgArticle: string
    stockArticle: number
    prixArticleHt: number
    tva: number
    idCategorie: number
    idFranchise: number
    estMenu: boolean

    constructor() 
    { 

    }

    public init_empty() : void{
        this.idArticle = 0;

        this.stockArticle = 0;
        this.prixArticleHt = 0;
        this.tva = 0;

        this.libelleArticle = '0';
        this.descriptionArticle = '0';
        this.urlImgArticle = '0';


        this.idFranchise = 0;
        this.idFranchise = 0;

        this.estMenu = false;

    }
}
/*


*/