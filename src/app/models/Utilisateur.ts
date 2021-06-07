import { Commande } from './Commande';

export class Utilisateur {
    idUtilisateur: number;
    emailUtilisateur: string;
    estActive: number;
    idAdresseFacturation: number;
    idAdresseLivraison: number;
    idFranchise: number;
    mdpUtilisateur: string;
    nomUtilisateur: string;
    prenomUtilisateur: string;
    numeroTelUtilisateur: string;
    role: string;

    constructor() { }

    public init_empty(): void {
        this.idUtilisateur = 0;
        this.emailUtilisateur = '0';
        this.estActive = 0;
        this.idAdresseFacturation = 0;
        this.idAdresseLivraison = 0;
        this.idFranchise = 0;
        this.mdpUtilisateur = '0';
        this.nomUtilisateur = '0';
        this.prenomUtilisateur = '0';
        this.numeroTelUtilisateur = '0';
        this.role = '0';
    }
}
