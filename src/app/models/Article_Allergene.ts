export class Article_Allergene {
    public idArticle: number;
    public libelleAllergene: string;

    constructor(){}

    public init_empty(): void{
        this.idArticle = 0;
        this.libelleAllergene = '*';
    }
}