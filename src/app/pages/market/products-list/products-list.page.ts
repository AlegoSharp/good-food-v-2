import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { User } from 'src/app/models/User';
import { AlertService } from 'src/app/services/alert.service';
import {FormService} from "src/app/services/form.service"
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  public Articles = [];
  public ModeMenu = 0;
  constructor(private formService: FormService,private storageService: StorageService,private alertService: AlertService) { }

  ngOnInit() {
    this.formService.getList("Article/ingredient").subscribe((response) => {
      (response as Array<Article>).forEach(element => {
        this.Articles.push(element);
      });
    });
  }

  async addItemToBasket(article: Article){
    let ligneCommande = new LigneCommande();
    this.alertService.presentMarketDialogQty().then(x=>{
      x.present();
      x.onWillDismiss().then((data) =>{
        ligneCommande.article = article;
        ligneCommande.quantiteArticle = data.data.values["Quantity"]

        this.storageService.addItemToBasket(ligneCommande);
      });
      console.log(article)
    });
  } 
  
}
