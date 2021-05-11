import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-menus-list',
  templateUrl: './menus-list.page.html',
  styleUrls: ['./menus-list.page.scss'],
})
export class MenusListPage implements OnInit {

  public Articles = [];
  constructor(private formService: FormService,private storageService: StorageService,private alertService: AlertService) { }

  ngOnInit() {
    this.formService.getList("Article/menu").subscribe((response) => {
      (response as Array<Article>).forEach(element => {
        this.Articles.push(element);
      });
    });
  }

  async addItemToBasket(article: Article) {
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
