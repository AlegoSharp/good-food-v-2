import { Component, OnInit } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger } from '@angular/animations';
import { Article } from './models/Article';
import jwt_decode from 'jwt-decode';
import { Plugins } from '@capacitor/core';
import { MenuItem } from './models/UiModels/MenuItem';
import { UtilityService } from './services/utility.service';
import { FormService } from './services/form.service';
import { Franchise } from './models/Franchise';
// import { CookieService } from 'ngx-cookie-service';

const { Storage } = Plugins;
export const routeTransitionAnimations = trigger('triggerName', []);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {

  searchFranchise = '';
  public franchises: Franchise[];
  public selectedFranchise: Franchise;

  constructor(private router: Router,
    private util: UtilityService,
    private formService: FormService
    ) {
    // this.cookieService.set('Set-Cookie', 'jwt=test');
  }

  public basketCount = 0;
  public IsConnected = false;
  private storageBusy = false;
  private franchiseSelected = false;
  private token = '';
  private role = '';

  private autoSaveInterval: any = setInterval(async () => {
    await this.getToken();
    if(this.searchFranchise && this.searchFranchise.length > 2){
      this.formService.getList("Franchise?search=" + this.searchFranchise).toPromise().then(Response =>{
        this.franchises = Response as Array<Franchise>;
        this.searchFranchise = '';
        console.log(this.franchises);
      }).catch(reason =>{
        
      });
    }
  }, 1000);

  backHome() {
    this.router.navigateByUrl('/home');
  }

  showMenu() {
    const myElementRef = window.document.getElementById('leftMenu');
    const fadeOut = createAnimation()
      .addElement(myElementRef)
      .duration(500)
      .fromTo('opacity', '1', '0');
    if (window.document.getElementById('leftMenu').style.display === 'none') {
      window.document.getElementById('leftMenu').style.display = 'block';
      this.fadeIn('leftMenu');
    } else {
      fadeOut.play().then(() => {
        window.document.getElementById('leftMenu').style.display = 'none';
      });
    }
  }

  fadeIn(elementID: string) {
    const myElementRef = window.document.getElementById(elementID);
    const fadeIn = createAnimation()
      .addElement(myElementRef)
      .duration(500)
      .fromTo('opacity', '0', '1');
    fadeIn.play();
  }

  fadeOut(elementID: string) {
    const myElementRef = window.document.getElementById(elementID);
    const fadeOut = createAnimation()
      .addElement(myElementRef)
      .duration(300)
      .fromTo('opacity', '1', '0');
    fadeOut.play();
  }

  async prepareRoute() {
    if (this.token === '') {
      if (!this.storageBusy) {
        this.storageBusy = true;
        setTimeout(async () => {
          this.basketCount = (JSON.parse(await (await Storage.get({ key: 'basket' })).value) as Array<Article>).length;
          await this.getToken();
          this.storageBusy = false;
        }, 500);
      }
    } else {
      if (!this.storageBusy) {
        this.storageBusy = true;
        setTimeout(async () => {
          this.basketCount = (JSON.parse(await (await Storage.get({ key: 'basket' })).value) as Array<Article>).length;
          this.storageBusy = false;
        }, 500);
      }
    }
  }

  async getToken() {
    const ret = await Storage.get({ key: 'token' });
    if (ret.value !== null) {
      //  console.log(ret.value);
      this.util.token = ret.value;
      this.token = (ret.value);
      this.role = (jwt_decode(this.token) as any).role;
      this.IsConnected = true;
    }else{
      this.IsConnected = false;
    }
  }
  async onSearchInput(event: any) {
    this.searchFranchise = event.target.value;
    if(event.target.value === ''){
      this.franchises = [];
      this.franchiseSelected = false;
      this.util.franchiseSelected = undefined;
      this.selectedFranchise = undefined;
    }
  }

  selectFranchise(item: Franchise){
    this.util.franchiseSelected = item;
    this.selectedFranchise = item;
    this.searchFranchise = item.nomFranchise;
    this.franchiseSelected = true;
  }
}
