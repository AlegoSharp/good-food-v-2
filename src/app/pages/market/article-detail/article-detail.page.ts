import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.toPromise().then((value: Params) =>{
      value[0];
    });
    this.route.queryParams.subscribe((params: any) => {
      if (params) {
        let queryParams = JSON.parse(params);
        console.log(queryParams)
      }
    });
  }

}
