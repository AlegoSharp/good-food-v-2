import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Commande } from 'src/app/models/Commande';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {

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

}
