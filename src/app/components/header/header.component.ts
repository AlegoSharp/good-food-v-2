import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Franchise } from 'src/app/models/Franchise';
import { UtilityService } from 'src/app/services/utility.service';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';
import { Plugins } from '@capacitor/core';
import { LigneCommande } from 'src/app/models/LigneCommande';

const { Storage } = Plugins;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  @Input() title: string;
  dropdown = false;

  @ViewChild('productbtn', { read: ElementRef })productbtn: ElementRef;

  public franchiseSelected = false;
  public displayFranchise = false;
  public role = '';

  searchFranchise = '';
  public franchises: Franchise[];
  public selectedFranchise: Franchise;

  public basketCount = 0;
  public storageBusy = false;

  public token = this.util.token;

  IsConnected = false;

  constructor(private router: Router,
              private util: UtilityService,
              private formService: FormService) { }

  ngOnInit() {
    this.getToken();
    this.getBasketCount();
  }

  hideDropdown(event) {
    const xTouch = event.clientX;
    const yTouch = event.clientY;

    const rect = this.productbtn.nativeElement.getBoundingClientRect();
    const topBoundary = rect.top + 2;
    const leftBoundary = rect.left + 2;
    const rightBoundary = rect.right - 2;

    if (xTouch < leftBoundary || xTouch > rightBoundary || yTouch < topBoundary) {
      this.dropdown = false;
    }
  }
  public isConnected(): boolean {
    if (this.util.backetCache) {
      this.basketCount = this.util.backetCache.length;
    }
    return !this.IsConnected || this.util.token === undefined || this.util.token === '' ? false : true;
  }

  public async getToken(): Promise<string> {
    let result = '';
    try {
      result = await (await Storage.get({ key: 'token' })).value;
      if (result) {
        this.util.token = result;
        this.token = (result);
        this.role = (jwt_decode(this.token) as any).role;
        this.IsConnected = true;
      }
    } catch (reason) {
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
      if (this.util.backetCache) {
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
