export class Fournisseur {
    public idFournisseur: number;
    public adresseFournisseur: number;
    public emailFournisseur: string;
    public nomFournisseur: string;
    public numeroSiretFournisseur: number;
    public numeroTelFournisseur: number;

    constructor(){}

    public init_empty(): void{
        this.idFournisseur = 0;
        this.adresseFournisseur = 0;
        this.emailFournisseur = '0';
        this.nomFournisseur = '0';
        this.numeroSiretFournisseur = 0;
        this.numeroTelFournisseur = 0;
    }
}
