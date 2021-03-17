import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Article } from 'src/app/models/Article';
import { User } from 'src/app/models/user';
import {FormService} from "src/app/services/form.service"
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

  public Articles = [];
  constructor(private formService: FormService) { }

  ngOnInit() {
  this.formService.getList("Article","getAllArticle").subscribe((response) => {
    (response as Array<Article>).forEach(element => {
      this.Articles.push(element);
    });
  });
  }  
}
