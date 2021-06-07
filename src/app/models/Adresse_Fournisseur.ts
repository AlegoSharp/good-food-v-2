
export class Adresse_Fournisseur {
    public idAdresse: number;
    public idTiers: number;
    public numeroAdresse: number;
    public nomAdresse: string;
    public suppNomAdresse: string;
    public codePostal: number;
    public villeAdresse: string;
    public pays: string;
    public estActive: number;

    constructor(){}

    public init_empty(): void{
        this.idAdresse = 0;
        this.idTiers = 0;
        this.numeroAdresse = 0;
        this.nomAdresse = '0';
        this.suppNomAdresse = '0';
        this.codePostal = 0;
        this.villeAdresse = '0';
        this.pays = '0';
        this.estActive = 0;
    }
}
