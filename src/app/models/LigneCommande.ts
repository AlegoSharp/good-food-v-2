import { Article } from './Article';

export class LigneCommande {

    idLigneCommande: number;
    idCommande: number;
    article: Article;
    idArticle: any;
    quantiteArticle: number;
    sousTotalTtc: number;

    constructor()
    {
        this.init_empty();
    }

    public init_empty(): void{
        this.idLigneCommande = 0;
        this.idCommande = 0;
        this.article = new Article();
        this.quantiteArticle = 0;
        this.sousTotalTtc = 0;

    }

    public calculerSousTotal(): number{
        if (this.article !== undefined){
            return (this.article.prixArticleHt * this.quantiteArticle) * (1 + (this.article.tva / 100));
        }
        else
        {
            return 0;
        }
    }
}
