export class Franchise {
    public a_idFranchise: number;
    public b_emailFranchise: string;
    public c_idGroupeFranchise: number;
    public d_nomFranchise: string;
    public e_numeroSiretFranchise: number;
    public f_numeroTelFranchise: number;
    public g_estActive: number;

    constructor(){}

    public init_empty(): void{
        this.a_idFranchise = 0;
        this.b_emailFranchise = '0';
        this.c_idGroupeFranchise = 0;
        this.d_nomFranchise = '0';
        this.e_numeroSiretFranchise = 0;
        this.f_numeroTelFranchise = 0;
        this.g_estActive = 0;
    }
}
