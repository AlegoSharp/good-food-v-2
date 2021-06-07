
export class Adresse_Fournisseur {
    public a_idAdresse: number;
    public b_idTiers: number;
    public c_codePostal: number;
    public d_nomAdresse: string;
    public e_numeroAdresse: number;
    public f_pays: string;
    public g_suppNomAdresse: string;
    public h_villeAdresse: string;
    public i_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idAdresse = 0;
        this.b_idTiers = 0;
        this.c_codePostal = 0;
        this.d_nomAdresse = '0';
        this.e_numeroAdresse = 0;
        this.f_pays = '0';
        this.g_suppNomAdresse = '0';
        this.h_villeAdresse = '0';
        this.i_estActive = 0;
    }
}
