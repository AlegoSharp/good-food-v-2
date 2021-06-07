import { ThrowStmt } from '@angular/compiler';
import { LigneCommande } from './LigneCommande';
import { Aliases } from './models-ressources/Aliases';
import { Utilisateur } from './Utilisateur';

export class Commande {

    idCommande: number;
    statutCommande: number;
    dateCommande: Date;
    totalTtc: number;
    totalHt: number;
    idAdresseLivraison: number;
    idAdresseFacturation: number;
    utilisateur: Utilisateur;
    lignesCommande: LigneCommande[];
    estActive: number;

    constructor()
    {
    }

    private options = {
        ConvivialsNames: Aliases.commandeConvivialNames,
        CustomRoutes: Aliases.categorieArticleCustomRoutes,
    };

    public calculerTotalTtc(): number{
        if (this.lignesCommande !== undefined && this.lignesCommande.length > 0){
            return this.totalHt * (1 + (this.lignesCommande[0].article.tva / 100));
        }else{
            return 0;
        }
    }

    public calculerTotalHt(): number{

        let total = 0;

        if (this.lignesCommande !== undefined && this.lignesCommande.length > 0) {
            this.lignesCommande.forEach(element => {
                total += element.article.prixArticleHt * element.quantiteArticle;
            });
        }

        this.totalHt = total;

        return total;
    }
}

