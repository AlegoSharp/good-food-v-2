import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { User } from 'src/app/models/user';
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
  constructor(private formService: FormService,private storageService: StorageService,private alertService: AlertService) { }

  ngOnInit() {
    this.formService.getList("Article","getAllArticle").subscribe((response) => {
      (response as Array<Article>).forEach(element => {
        this.Articles.push(element);
      });
    });
  }

  async addItemToBasket(article: Article){
    let qty = 0;
    let alert;
    this.alertService.presentMarketDialogQty().then(x=>{
      x.present();
      x.onWillDismiss().then((data) =>{
        article.qty = data.data.values["Quantity"]
        this.storageService.addItemToBasket(article);
      });
      console.log(article)
    });

  } 

}
