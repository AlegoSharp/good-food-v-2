export class Franchise {
    public idFranchise: number;
    public idGroupeFranchise: number;

    public numeroSiretFranchise: number;
    public numeroTelFranchise: number;


    public emailFranchise: string;
    public nomFranchise: string;

    //public estActive: number;

    constructor(){}

    public init_empty(): void{
        this.idFranchise = 0;
        this.idGroupeFranchise = 0;
        this.numeroSiretFranchise = 0;
        this.numeroTelFranchise = 0;
        this.emailFranchise = '0';
        this.nomFranchise = '0';
    }
}
