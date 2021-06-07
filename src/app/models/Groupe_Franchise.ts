export class Groupe_Franchise {
    public idGroupeFranchise: number;
    public nomGroupeFranchise: string;
    public estActive: number;

    constructor(){}

    public init_empty(): void{
        this.idGroupeFranchise = 0;
        this.nomGroupeFranchise = '0';
        this.estActive = 0;
    }
}