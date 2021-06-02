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
  // animations: [routeTransitionAnimations]
})

export class AppComponent {

  constructor(private router: Router,
              private util: UtilityService,
              private formService: FormService,
              private alertService: AlertService
  ) {
    this.getToken();
    this.getBasketCount();
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
    if (this.util.backetCache){
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

  backHome() {
    this.router.navigateByUrl('/home');
  }

  async getBasketCount() {
    await Storage.get({ key: 'basket' }).then(Response => {
      this.util.backetCache = JSON.parse(Response.value) as LigneCommande[];
      if (this.util.backetCache){
        this.basketCount = this.util.backetCache.length;
      }
    });
  }

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
