import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IonSelect, IonSlides } from '@ionic/angular';
import { Article } from 'src/app/models/Article';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { Page } from 'src/app/models/UiModels/Page';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { StorageService } from 'src/app/services/storage.service';
@Component({
    selector: 'app-products-list',
    templateUrl: './products-list.page.html',
    styleUrls: ['./products-list.page.scss'],
})
export class ProductsListPage implements OnInit {

    @ViewChild(IonSlides) slides: IonSlides;
    @ViewChild(IonSelect) select: IonSelect;

    private slideOpts = {
        initialSlide: 1,
        speed: 400
    };
    public Pages: Page[];

    public CurrentPagesLoaded = [];

    public Categories: Categorie_Article[];
    public selectedCategorie: any;

    public Articles = [];
    public ArticlesNext = [];
    public ArticlesPrev = [];

    public ModeMenu = 0;

    public currentSlideNumber = 0;
    public currentSlideName = this.currentSlideNumber;

    public pageCount = [];
    public nbPages = 0;
    public nbArt = 0;

    public nbElemParPage = 8;

    private isButtonSlideChange = false;
    private filterVisible = false;

    private searchText = '';

    constructor(private formService: FormService,
                private storageService: StorageService,
                private alertService: AlertService,
                private route: ActivatedRoute,
                private router: Router
    ){ }

    ngOnInit() {
        this.currentSlideNumber = 0;
        this.init();
        this.getCategories();
    }

    init() {
        this.Pages = [];
        this.Articles = [];

        this.route.data.subscribe(data => {
            this.ModeMenu = data.estMenu;
        });

        const maxelem = (this.nbElemParPage * 3);
        let query = '/Article?pageSize=' + maxelem.toString() +
            '&pageNumber=' + this.currentSlideNumber +
            '&estMenu=' + this.ModeMenu.toString();

        query = query + (this.selectedCategorie !== undefined ? '&idCategorieArticle=' + this.selectedCategorie : '');
        console.log(this.selectedCategorie);
        if (this.searchText !== '') {
            query = query + '&descriptionArticle=' + this.searchText +
                '&libelleArticle=' + this.searchText;
        }

        this.formService.getList(query).toPromise().then(response => {

            (response as Array<Article>).forEach(element => {
                this.Articles.push(element);
            });

            const countQuery = this.ModeMenu === 1 ? '/Article/menu/count' : '/Article/ingr/count';

            if (this.searchText === '') {
                this.formService.getList(countQuery).toPromise().then((responseCount: any) => {

                    this.nbArt = (responseCount as number);
                    this.nbPages = Math.ceil((responseCount as number) / this.nbElemParPage);
                    for (let i = 0; i < this.nbPages; i++) {
                        const page = new Page();
                        page.NumeroPage = i;
                        this.Pages.push(page);
                    }
                    this.Pages[0].Articles = this.getArticlePrevPage();

                    if (this.Pages.length > 1) {
                        this.Pages[1].Articles = this.getArticleCurrentPage();
                    }
                }).catch(reason => {
                    this.alertService.presentAlertOk('Error', reason.message);
                });
            } else {
                this.nbArt = this.Articles.length;
                this.nbPages = Math.ceil(this.nbArt / this.nbElemParPage);
                if (this.nbPages === 1) {
                    const page = new Page();
                    page.NumeroPage = 1;
                    this.Pages.push(page);
                } else {
                    for (let i = 0; i < this.nbPages + 1; i++) {
                        const page = new Page();
                        page.NumeroPage = i;
                        this.Pages.push(page);
                    }
                }
                this.Pages[0].Articles = this.getArticlePrevPage();
                if (this.Pages.length > 1) {
                    this.Pages[1].Articles = this.getArticleCurrentPage();
                }
                console.log(query, this.Pages);
            }
        }).catch(reason => {
            this.alertService.presentAlertOk('Error', reason.message);
        });
    }

    searchArticle() {
        this.init();
    }

    removeFilters() {
        this.searchText = '';
        this.selectedCategorie = undefined;
        this.init();
    }

    showHideFilters() {
        if (this.filterVisible) {
            this.filterVisible = false;
        } else {
            this.filterVisible = true;
        }
    }
    slideChanged() {
        if (!this.isButtonSlideChange) {
            this.slides.getActiveIndex().then(value => {
                if (value !== this.currentSlideNumber) {
                    this.currentSlideNumber = value;
                    this.getArticles();
                }
            });
        }
    }

    async prevPage() {
        if (this.currentSlideNumber - 1 > -1) {
            this.isButtonSlideChange = true;
            this.currentSlideNumber--;
            this.slides.slidePrev();
        }
    }

    async nextPage() {
        if (this.currentSlideNumber + 1 <= this.Pages.length) {
            this.isButtonSlideChange = true;
            this.currentSlideNumber++;
            this.slides.slideNext().finally(async () => {
                await this.getArticles().finally(() => {
                    this.isButtonSlideChange = false;
                });
            });
        }
    }

    async setPage() {
        this.currentSlideNumber = this.select.value;
        this.getArticles().then(async () => {
            this.slides.slideTo(this.select.value);
        });
    }


    getCategories() {
        this.Categories = [];
        this.formService.getList('Categorie_Article').toPromise().then(response => {
            (response as Array<Categorie_Article>).forEach(element => {
                this.Categories.push(element);
            });
        }).catch(reason => {
            this.alertService.presentAlertOk('Error', reason.message);
        });
    }

    getArticlePrevPage() {
        return this.Articles.slice(0, this.nbElemParPage);
    }

    getArticleNextPage() {
        return this.Articles.slice(this.nbElemParPage * 3, this.nbElemParPage * 4);

    }
    getArticleCurrentPage() {
        return this.Articles.slice(this.nbElemParPage, this.nbElemParPage + this.nbElemParPage);
    }

    async getArticles() {
        if (this.currentSlideNumber < this.Pages.length && this.Pages.length > 1) {
            this.Pages[this.currentSlideNumber].Articles = new Array<Article>();
            const query = this.getApiQuery(this.currentSlideNumber + 1);
            await this.formService.getList(query).toPromise().then(response => {
                (response as Array<Article>).forEach(element => {
                    this.Pages[this.currentSlideNumber].Articles.push(element);
                });
            }).catch(reason => {
                this.alertService.presentAlertOk('Error', reason.message + '\\n' + this.currentSlideNumber);
            });
        }

        if (this.currentSlideNumber - 1 > 0) {
            this.Pages[this.currentSlideNumber - 1].Articles = new Array<Article>();
            const query = this.getApiQuery(this.currentSlideNumber);
            await this.formService.getList(query).toPromise().then(response => {
                (response as Array<Article>).forEach(element => {
                    this.Pages[this.currentSlideNumber - 1].Articles.push(element);
                });
            }).catch(reason => {
                this.alertService.presentAlertOk('Error', reason.message + '\\n' + this.currentSlideNumber);
            });
        }

        if (this.currentSlideNumber - 2 > 0 && this.Pages.length > 1) {
            this.Pages[this.currentSlideNumber - 2].Articles = new Array<Article>();
            const query = this.getApiQuery(this.currentSlideNumber - 1);
            await this.formService.getList(query).toPromise().then(response => {
                (response as Array<Article>).forEach(element => {
                    this.Pages[this.currentSlideNumber - 2].Articles.push(element);
                });
            }).catch(reason => {
                this.alertService.presentAlertOk('Error', reason.message + '\\n' + this.currentSlideNumber);
            });
        }
    }

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
                        ligneCommande.quantiteArticle = data.data.values.Quantity;
                        this.storageService.addItemToBasket(ligneCommande);
                    }
                }
            });
        });
    }

    getApiQuery(pageNumber: number): string {
        let query = '/Article?pageSize=' + this.nbElemParPage +
            '&pageNumber=' + pageNumber +
            '&estMenu=' + this.ModeMenu.toString();

        query = query + (this.selectedCategorie !== undefined ? '&idCategorieArticle=' + this.selectedCategorie : '');

        if (this.searchText !== '') {
            query = query + '&descriptionArticle=' + this.searchText +
                '&libelleArticle=' + this.searchText;
        }
        return query;
    }
}
