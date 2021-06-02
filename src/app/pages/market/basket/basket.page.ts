import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { Commande } from 'src/app/models/Commande';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  public Articles: Array<LigneCommande>;
  public Commande: Commande;

  constructor(private storageService: StorageService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.Commande = new Commande();
  }

  ionViewDidEnter() {
    this.storageService.getObject('basket').then(value => {
      return (value as unknown) as Array<LigneCommande>;
    }).then(x => {
      this.Commande.lignesCommande = x;
      this.Articles = x;
    });
  }

  async increaseArtQtyFromBasket(ligneCommande: LigneCommande) {
    ligneCommande.quantiteArticle++;
    await this.storageService.replaceItemFromBasket(ligneCommande);
  }

  async decreaseArtQtyFromBasket(ligneCommande: LigneCommande) {
    if (ligneCommande.quantiteArticle - 1 < 1) {
      this.alertService.presentAlertOuiNon('Voulez-vous supprimer l\'article du panier ?', '', () => {
        ligneCommande.quantiteArticle--;
        this.deleteArtFromBasket(ligneCommande);
      });
    } else {
      ligneCommande.quantiteArticle--;
      await this.storageService.replaceItemFromBasket(ligneCommande);
    }
  }

  async deleteArtFromBasket(ligneCommande: LigneCommande) {
    await this.storageService.removeItemFromBasket(ligneCommande);
    this.Articles = await this.storageService.getObject('basket').then(value => {
      return (value as unknown) as Array<LigneCommande>;
    });
  }

   validateOrder() {
    if (this.Articles.length > 0) {
       this.router.navigateByUrl('/order');
    }
  }
}
