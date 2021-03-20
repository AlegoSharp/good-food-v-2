import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {

  public Articles: Array<Article>;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    console.log

  }
  ionViewDidEnter(){
    this.storageService.getObject("basket").then(value => {
      return (value as unknown) as Array<Article>;
  }).then(x=> {
    this.Articles = x;
  });
  }
  async getArticles(){
    return await this.storageService.getObject("basket").then(value => {
      return (value as unknown) as Array<Article>;
  });
  }
  async deleteArtFromBasket(article: Article) {
    await this.storageService.removeItemFromBasket(article);
    this.Articles = await this.storageService.getObject("basket").then(value => {
      return (value as unknown) as Array<Article>;
  });
  }

}
