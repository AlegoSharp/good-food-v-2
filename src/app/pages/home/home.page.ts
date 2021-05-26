import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/Article';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public Articles = [];


  constructor(private formService: FormService, private storageService: StorageService, private alertService: AlertService) { }

  ngOnInit() {
    this.getArticles();
  }

  async getArticles() {
    let query = '/Article?pageSize=' + 6 +
      '&pageNumber=' + 1 +
      '&estMenu=' + 1;
    await this.formService.getList(query).toPromise().then(response => {
      this.Articles = [];
      (response as Array<Article>).forEach(element => {
        this.Articles.push(element);
      });
    }).catch(reason => {
      this.alertService.presentAlertOk('Error', reason.message);
    });
  }

  async addItemToBasket(article: Article) {
    const ligneCommande = new LigneCommande();
    ligneCommande.article = article;
    this.alertService.presentMarketDialogQty().then(x => {
      x.present();
      x.onWillDismiss().then((data) => {
        if (data.data !== undefined) {
          if (data.data.values.Quantity !== '') {
            ligneCommande.quantiteArticle = data.data.values.Quantity;
            this.storageService.addItemToBasket(ligneCommande);
          }
        }
      });
      console.log(article)
    });
  }


}
