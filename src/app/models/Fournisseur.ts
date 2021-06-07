import { Aliases } from './models-ressources/Aliases';

export class Fournisseur {
    public idFournisseur: number;
    public idFranchise: number;
    public nomFournisseur: string;
    public numeroSiretFournisseur: number;
    public emailFournisseur: string;
    public numeroTelFournisseur: number;
    public adresseFournisseur: number;
    public estActive: number;

    constructor(){}

    private options = {
        ConvivialsNames: Aliases.fournisseurConvivialNames,
        CustomRoutes: Aliases.fournisseurCustomRoutes,
    };

    public init_empty(): void{
        this.idFournisseur = 0;
        this.adresseFournisseur = 0;
        this.emailFournisseur = '0';
        this.nomFournisseur = '0';
        this.numeroSiretFournisseur = 0;
        this.numeroTelFournisseur = 0;
        this.estActive = 0;
    }
}
