export class Fournisseur {
    public a_idFournisseur: number;
    public b_idFranchise: number;
    public c_nomFournisseur: string;
    public d_numeroSiretFournisseur: number;
    public e_emailFournisseur: string;
    public f_numeroTelFourniseur: number;
    public g_adresseFournisseur: number;
    public h_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idFournisseur = 0;
        this.b_idFranchise = 0;
        this.c_nomFournisseur = '0';
        this.d_numeroSiretFournisseur = 0;
        this.e_emailFournisseur = '0';
        this.f_numeroTelFourniseur = 0;
        this.g_adresseFournisseur = 0;
        this.h_estActive = 0;
    }
}
