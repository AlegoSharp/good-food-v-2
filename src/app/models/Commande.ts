import { ThrowStmt } from '@angular/compiler';
import { LigneCommande } from './LigneCommande';
import { Aliases } from './models-ressources/Aliases';
import { Utilisateur } from './Utilisateur';

export class Commande {

    a_idCommande: number;
    b_idUtilisateur: number;
    c_idAdresseFacturation: number;
    d_idAdresseLivraison: number;
    e_dateCommande: Date;
    f_totalTtc: number;
    g_statutCommande: number;
    h_idFranchise: number;_
    i_estActive: number;
    totalHt: number;
    lignesCommande: LigneCommande[];

    constructor()
    {
    }

    private options = {
        ConvivialsNames: Aliases.commandeConvivialNames,
        CustomRoutes: Aliases.categorieArticleCustomRoutes,
    };

    public calculerTotalTtc(): number{
        if (this.lignesCommande !== undefined && this.lignesCommande.length > 0){
            return this.totalHt * (1 + (this.lignesCommande[0].article.h_tva / 100));
        }else{
            return 0;
        }
    }

    public calculerTotalHt(): number{

        let total = 0;

        if (this.lignesCommande !== undefined && this.lignesCommande.length > 0) {
            this.lignesCommande.forEach(element => {
                total += element.article.g_prixArticleHt * element.d_quantiteArticle;
            });
        }

        this.totalHt = total;

        return total;
    }
}

