import { Aliases } from './models-ressources/Aliases';

export class Groupe_Franchise {
    public a_idGroupeFranchise: number;
    public b_nomGroupeFranchise: string;
    public c_estActive: number;

    constructor(){}

    private options = {
        ConvivialsNames: Aliases.categorieArticleConvivialNames,
        CustomRoutes: Aliases.categorieArticleCustomRoutes,
    };

    public init_empty(): void{
        this.a_idGroupeFranchise = 0;
        this.b_nomGroupeFranchise = '0';
        this.c_estActive = 0;
    }
}
