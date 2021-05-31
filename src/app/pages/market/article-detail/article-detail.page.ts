import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/Article';
import { Article_Allergene } from 'src/app/models/Article_Allergene';
import { Article_Promo } from 'src/app/models/Article_Promo';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';


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

  constructor(private route: ActivatedRoute, private formService: FormService, private alertService: AlertService) {}

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

}

