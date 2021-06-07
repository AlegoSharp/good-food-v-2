export class Article {
    a_idArticle: number;
    b_idCategorieArticle: number;
    c_idFranchise: number;
    d_libelleArticle: string;
    e_descriptionArticle: string;
    f_urlImgArticle: string;
    g_prixArticleHt: number;
    h_tva: number;
    i_estMenu: string;
    j_estActive: number;
    k_stockArticle: number;

    constructor(){}

    public init_empty(): void{
        this.a_idArticle = 0;
        this.b_idCategorieArticle = 0;
        this.c_idFranchise = 0;
        this.d_libelleArticle = '0';
        this.e_descriptionArticle = '0';
        this.f_urlImgArticle = '0';
        this.g_prixArticleHt = 0;
        this.h_tva = 0;
        this.i_estMenu = '0';
        this.j_estActive = 0;
        this.k_stockArticle = 100;
    }
}
