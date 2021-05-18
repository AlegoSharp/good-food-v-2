import { ThrowStmt } from "@angular/compiler";
import { LigneCommande } from "./LigneCommande";
import { Utilisateur } from "./User";

export class Commande {
	
	idCommande: number;
	statutCommande: number;
	dateCommande: Date;

    totalTtc: number;
    totalHt: number;

	adresseUtilisateur: number;
	utilisateur: Utilisateur;

    lignesCommande: LigneCommande[];

    constructor() 
    { 
    }

    

    public calculerTotalTtc(): number{
        if(this.lignesCommande !== undefined){
            return this.totalHt * (1 + (this.lignesCommande[0].article.tva / 100));
        }else{
            return 0;
        }
    }

    public calculerTotalHt(): number{

        let total = 0;

        if(this.lignesCommande !== undefined){
            this.lignesCommande.forEach(element => {                
                total += element.article.prixArticleHt * element.quantiteArticle
            });
        }

        this.totalHt = total;

        return total;
    }
}
/*


*/
/*




	@Column(name="total_ttc")
	private double totalTtc;

	//bi-directional many-to-one association to Adresse_Utilisateur
	@ManyToOne
	@JoinColumn(name="id_adresse")
	private Adresse_Utilisateur adresseUtilisateur;

	//bi-directional many-to-one association to Utilisateur
	@ManyToOne
	@JoinColumn(name="id_utilisateur")
	private Utilisateur utilisateur;

 */