import { Commande } from './Commande';

export class Utilisateur {
    a_idUtilisateur: number;
    b_idAdresseLivraison: number;
    c_idAdresseFacturation: number;
    d_emailUtilisateur: string;
    e_mdpUtilisateur: string;
    f_nomUtilisateur: string;
    g_numeroTelUtilisateur: string;
    h_prenomUtilisateur: string;
    i_role: string;
    j_idFranchise: number;
    k_estActive: number;

    constructor() { }

    public init_empty(): void {
        this.a_idUtilisateur = 0;
        this.b_idAdresseLivraison = 0;
        this.c_idAdresseFacturation = 0;
        this.d_emailUtilisateur = '0';
        this.e_mdpUtilisateur = '0';
        this.f_nomUtilisateur = '0';
        this.g_numeroTelUtilisateur = '0';
        this.h_prenomUtilisateur = '0';
        this.i_role = '0';
        this.j_idFranchise = 0;
        this.k_estActive = 0;
    }
}
