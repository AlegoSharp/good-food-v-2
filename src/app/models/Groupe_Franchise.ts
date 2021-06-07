export class Groupe_Franchise {
    public idGroupeFranchise: number;
    public nomGroupeFranchise: string;

    constructor(){}

    public init_empty(): void{
        this.idGroupeFranchise = 0;
        this.nomGroupeFranchise = '0';
    }
}