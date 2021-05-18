    export class Categorie_Article {
        public idCategorieArticle: number;
        public libelleCategorieArticle: string;

        constructor(){}
    
        public init_empty() : void{
            this.idCategorieArticle = 0;
            this.libelleCategorieArticle = '0';
        }
    }