import { Aliases } from './models-ressources/Aliases';

export class Groupe_Franchise {
    public idGroupeFranchise: number;
    public nomGroupeFranchise: string;
    public estActive: number;

    constructor(){}

    private options = {
        ConvivialsNames: Aliases.categorieArticleConvivialNames,
        CustomRoutes: Aliases.categorieArticleCustomRoutes,
    };

    public init_empty(): void{
        this.idGroupeFranchise = 0;
        this.nomGroupeFranchise = '0';
        this.estActive = 0;
    }
}
