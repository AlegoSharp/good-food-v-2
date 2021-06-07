import { Article } from './Article';

export class LigneCommande {
    a_idLigneCommande: number;
    b_idCommande: number;
    c_idArticle: number;
    d_quantiteArticle: number;
    e_sousTotalTtc: number;
    f_estActive: number;
    article: Article;

    constructor()
    {
        this.init_empty();
    }

    public init_empty(): void{
        this.a_idLigneCommande = 0;
        this.b_idCommande = 0;
        this.c_idArticle= 0;
        this.d_quantiteArticle = 0;
        this.e_sousTotalTtc = 0;
        this.f_estActive = 0;
    }

    public calculerSousTotal(): number{
        if (this.article !== undefined){
            return (this.article.g_prixArticleHt * this.d_quantiteArticle) * (1 + (this.article.h_tva / 100));
        }
        else
        {
            return 0;
        }
    }
}
