
export class Adresse_Fournisseur {
    public idAdresse: number;
    public idFournisseur: number;

    public numeroAdresse: number;
    public nomAdresse: string;
    public suppNomAdresse: string;

    public codePostal: string;
    public villeAdresse: string;
    public pays: string;

    constructor(){}

    public init_empty(): void{
        this.idAdresse = 0;
        this.idFournisseur = 0;
        this.numeroAdresse = 0;
        this.nomAdresse = '0';
        this.suppNomAdresse = '0';
        this.codePostal = '0';
        this.villeAdresse = '0';
        this.pays = '0';
    }
}
