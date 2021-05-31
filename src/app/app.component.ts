import { Component } from '@angular/core';
import { createAnimation } from '@ionic/core';
import { Router } from '@angular/router';
import { trigger } from '@angular/animations';
import { Article } from './models/Article';
import jwt_decode from 'jwt-decode';
import { Plugins } from '@capacitor/core';
import { UtilityService } from './services/utility.service';
import { FormService } from './services/form.service';
import { Franchise } from './models/Franchise';
import { AlertService } from './services/alert.service';
import { cpuUsage } from 'process';
import { resourceLimits } from 'worker_threads';
import { LigneCommande } from './models/LigneCommande';

const { Storage } = Plugins;

export const routeTransitionAnimations = trigger('triggerName', []);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {

  constructor(private router: Router,
              private util: UtilityService,
              private formService: FormService,
              private alertService: AlertService
  ) {
    this.getToken().then((resp) => {
      console.log(resp);
    });
    this.getBasketCount();
    // this.cookieService.set('Set-Cookie', 'jwt=test');
  }
  private franchiseSelected = false;
  private displayFranchise = false;
  private role = '';

  searchFranchise = '';
  public franchises: Franchise[];
  public selectedFranchise: Franchise;

  public basketCount = 0;
  private storageBusy = false;

  private token = this.util.token;

  IsConnected = false;

  public isConnected(): boolean{
    if(this.util.backetCache){
      this.basketCount = this.util.backetCache.length;
    }
    return !this.IsConnected || this.util.token === undefined || this.util.token === '' ? false : true;
  }

  public async getToken(): Promise<string>{
    let result = '';
    try{
      result = await (await Storage.get({ key: 'token' })).value;
      if (result){
        this.util.token = result;
        this.token = (result);
        this.role = (jwt_decode(this.token) as any).role;
        this.IsConnected = true;
      }
    }catch (reason){
      console.log(reason);
    }

    return result;
  }

  public getFranchises = async (): Promise<Franchise[]> => {
    const result = await this.formService.getList('Franchise?search=' + this.searchFranchise).toPromise() as Franchise[];
    this.franchises = result;
    this.displayFranchise = (result && result.length > 0 && !this.franchiseSelected);
    return result;
  }

/*   private autoSaveInterval: any = setInterval(async () => {
    await this.getToken().catch(reason => {
      this.alertService.presentToast('Error', 'problème d\'initialisation', true);
    });
    await this.prepareRoute().catch(reason => {
      this.alertService.presentToast('Error', 'problème d\'initialisation' + '\\n' + reason.message, true);
    });

    if (this.searchFranchise && this.searchFranchise.length > 2) {

    }
  }, 1000);
 */
  backHome() {
    this.router.navigateByUrl('/home');
  }

 /*  showMenu() {
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
  } */

  async getBasketCount() {
    await Storage.get({ key: 'basket' }).then(Response => {
      this.util.backetCache = JSON.parse(Response.value) as LigneCommande[];
      this.basketCount = this.util.backetCache.length;
    });

/*     if (Storage){
      if (basket){
        this.basketCount = (JSON.parse(basket.value) as []).length;
      }else{
        return 0;
      }
    } */
  }

 /*  async getToken() {
    const ret = await Storage.get({ key: 'token' });
    // console.log(ret);
    this.IsConnected = false;
    if (ret){
      if (ret.value !== null) {
        //  console.log(ret.value);
        try{
          this.util.token = ret.value;
          this.token = (ret.value);
          this.role = (jwt_decode(this.token) as any).role;
          this.IsConnected = true;
        }catch (reason){
          this.IsConnected = false;
        }

      } else {
        this.IsConnected = false;
      }
    }else{
      this.IsConnected = false;
    }
  } */

  onSearchInput(event: any) {
    this.searchFranchise = event.target.value;
    this.getFranchises.call(null);
    if (event.target.value === '') {
      this.franchises = [];
      this.franchiseSelected = false;
      this.util.franchiseSelected = undefined;
      this.selectedFranchise = undefined;
    }
  }

  selectFranchise(item: Franchise) {
    this.displayFranchise = false;
    this.util.franchiseSelected = item;
    this.selectedFranchise = item;
    this.searchFranchise = item.nomFranchise;
    this.franchiseSelected = true;
  }
}
