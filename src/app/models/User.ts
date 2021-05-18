import { Commande } from "./Commande";

export class Utilisateur {
    idUtilisateur: number;
    idRole: number;
    adresseUtilisateur: number;

    nomUtilisateur: string;
    prenomUtilisateur: string;

    numeroTelUtilisateur: string;
    emailUtilisateur: string;

    mdpUtilisateur: string;

    commandes: Commande[];

    constructor() 
    { 

    }

    public init_empty() : void{
        this.idUtilisateur = 0;
        this.idRole = 0;
        this.adresseUtilisateur = 0;

        this.nomUtilisateur = '0';
        this.prenomUtilisateur = '0';

        this.numeroTelUtilisateur = '0';
        this.emailUtilisateur = '0';

        this.mdpUtilisateur = '0';

        this.commandes = new Array<Commande>();
    }
}
