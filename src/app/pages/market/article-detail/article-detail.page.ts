import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { Article_Allergene } from 'src/app/models/Article_Allergene';
import { Article_Promo } from 'src/app/models/Article_Promo';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

  public article: Article;
  public id: number;
  public artAllergenes: Article_Allergene[];
  public artPromos: Article_Promo[];

  constructor(
    private route: ActivatedRoute,
    private formService: FormService,
    private alertService: AlertService,
    private storageService: StorageService
    ) {}

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.getArticle();
      this.getAllergenes();
      this.getPromos();
    });
  }

  async getArticle() {
    await this.formService.getList('Article/' + this.id).toPromise().then(response => {
      this.article = response as Article;
    })
    .catch(reason => {
      this.alertService.presentAlertOk('Error', reason.message);
    });
  }

  async getAllergenes() {
    await this.formService.getList('Article/' + this.id + '/Allergene').toPromise().then(response => {
      this.artAllergenes = response as Article_Allergene[]
      console.log(this.artAllergenes);
    })
    .catch(reason => {
      this.alertService.presentAlertOk('Error', reason.message);
    });
  }

  async getPromos() {
    await this.formService.getList('Article/' + this.id + '/Promo').toPromise().then(response => {
      this.artPromos = response as Article_Promo[]
      console.log(this.artPromos);
    })
    .catch(reason => {
      this.alertService.presentAlertOk('Error', reason.message);
    });
  }

  /**
   * Adds article to basket
   * Ajouter un article au panier
   * @param article article
   */
  async addItemToBasket(article: Article) {
    const ligneCommande = new LigneCommande();
    ligneCommande.article = article;
    this.alertService.presentMarketDialogQty().then(x => {
        x.present().then(() => {
            const firstInput: any = document.querySelector('ion-alert input');
            firstInput.focus();
        });
        x.onWillDismiss().then((data) => {
            if (data.data !== undefined) {
                if (data.data.values.Quantity !== '') {
                    ligneCommande.d_quantiteArticle = data.data.values.Quantity;
                    this.storageService.addItemToBasket(ligneCommande);
                }
            }
        });
    });
  }

}

