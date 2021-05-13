import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSelect, IonSlides } from '@ionic/angular';
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

  @ViewChild(IonSlides) slides: IonSlides;
  @ViewChild(IonSelect) select: IonSelect;  

  private slideOpts = {
    initialSlide: 1,
    speed: 400
  };
  public Articles = [];
  public ArticlesNext = [];
  public ArticlesPrev = [];
  public ModeMenu = 0;
  public currentSlideNumber = 1;
  public pageCount = [];

  private isButtonSlideChange = false;
  private filterVisible = false;  constructor(private formService: FormService,private storageService: StorageService,private alertService: AlertService) { }

  ngOnInit() {
    for(let i = 0; i < 20; i++){
      this.pageCount.push(i+1)
    }
    this.getArticles(true);

  }

  showHideFilters(){
    if(this.filterVisible){
      this.filterVisible = false;
    }else{
      this.filterVisible = true;
    }
  }
  slideChanged(){ 
    if(!this.isButtonSlideChange){
      console.log(this.isButtonSlideChange)
      this.slides.getActiveIndex().then(value=>{
        console.log(value+1)
        this.currentSlideNumber = value+1;
        this.getArticles(true);
      })
    }
  } 

  async prevPage(){ 
    if(this.currentSlideNumber - 1 > 0){
      this.isButtonSlideChange = true;
      this.Articles = this.ArticlesPrev;
      this.currentSlideNumber--;
      this.slides.slidePrev().finally(async () =>{
        await this.getArticles().finally(()=>{
          this.isButtonSlideChange = false;
        });
      });
    }
  }

  async nextPage(){
    if(this.currentSlideNumber +1 < this.pageCount.length){
      this.Articles = this.ArticlesNext;
      this.isButtonSlideChange = true;
      this.currentSlideNumber++;
      this.slides.slideNext().finally(async () =>{
        await this.getArticles().finally(()=>{
          this.isButtonSlideChange = false;
        });
      });
    }
  }

  async setPage(){
    this.currentSlideNumber = this.select.value;
    await this.getArticles(true).then(async () =>{
      this.slides.slideTo(this.select.value-1)
    });
  }

  compareWith(o1: number, o2: number) {
    return o1 && o2 ? o1 === o2 : o1 === o2;
  }

  async getArticles(init = false){
    await this.formService.getList("/Article/menu/a_pageSize=25&pageNumber=" + (this.currentSlideNumber - 1).toString()).toPromise().then(response => {
      this.ArticlesPrev = [];
      (response as Array<Article>).forEach(element => {
        this.ArticlesPrev.push(element);
      });
    }).catch(reason => {
      this.alertService.presentAlertOk("Error",reason.message);
    }); 
    if(init){
      await this.formService.getList("/Article/menu/a_pageSize=25&pageNumber=" + this.currentSlideNumber).toPromise().then(response => {
        this.Articles = [];
        (response as Array<Article>).forEach(element => {
          this.Articles.push(element);
        });
      }).catch(reason => {
        this.alertService.presentAlertOk("Error",reason.message);
      });
    }    
    await this.formService.getList("/Article/menu/a_pageSize=25&pageNumber=" + (this.currentSlideNumber + 1).toString()).toPromise().then(response => {
      this.ArticlesNext = [];
      (response as Array<Article>).forEach(element => {
        this.ArticlesNext.push(element);
      });
    }).catch(reason => {
      this.alertService.presentAlertOk("Error",reason.message);
    });        
  }

  async addItemToBasket(article: Article){
    let ligneCommande = new LigneCommande();
    ligneCommande.article = article;
    this.alertService.presentMarketDialogQty().then(x=>{
      x.present();
      x.onWillDismiss().then((data) =>{
        if(data.data !== undefined){
          if(data.data.values["Quantity"] !== ''){
            ligneCommande.quantiteArticle = data.data.values["Quantity"]
            this.storageService.addItemToBasket(ligneCommande);
          }
        }
      });
      console.log(article)
    });
  } 

}
