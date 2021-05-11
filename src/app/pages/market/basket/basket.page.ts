import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { Commande } from 'src/app/models/Commande';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  public Articles: Array<LigneCommande>;
  public Commande: Commande;

  constructor(private storageService: StorageService, private router: Router) { }

  ngOnInit() {
    this.Commande = new Commande();

  }

  ionViewDidEnter(){
    this.storageService.getObject("basket").then(value => {
        return (value as unknown) as Array<LigneCommande>;
    }).then(x=> {
      this.Commande.lignesCommande = x;
      this.Articles = x;
    });
  }



  async deleteArtFromBasket(ligneCommande: LigneCommande) {
    await this.storageService.removeItemFromBasket(ligneCommande);
    this.Articles = await this.storageService.getObject("basket").then(value => {
      return (value as unknown) as Array<LigneCommande>;
    });
  }

  async validateOrder(){
    await this.router.navigateByUrl("/order");
  }

}
