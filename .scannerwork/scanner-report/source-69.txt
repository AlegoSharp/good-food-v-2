import { query } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Article } from 'src/app/models/Article';
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

  constructor(private route: ActivatedRoute, private formService: FormService, private alertService: AlertService) {}

  ngOnInit() {
    this.route.queryParams
    .subscribe(params => {
      this.id = params.id;
      this.getArticle();
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

}
