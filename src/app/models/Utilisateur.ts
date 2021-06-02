import { Commande } from './Commande';

export class Utilisateur {
    idUtilisateur: number;
    role: string;

    nomUtilisateur: string;
    prenomUtilisateur: string;

    numeroTelUtilisateur: string;
    emailUtilisateur: string;

    mdpUtilisateur: string;

    constructor() { }

    public init_empty(): void {
        this.idUtilisateur = 0;
        this.role = '0';

        this.nomUtilisateur = '0';
        this.prenomUtilisateur = '0';

        this.numeroTelUtilisateur = '0';
        this.emailUtilisateur = '0';

        this.mdpUtilisateur = '0';

    }
}
