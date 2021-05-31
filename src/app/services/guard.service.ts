import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from './storage.service'
import jwt_decode from 'jwt-decode';
import { Plugins } from '@capacitor/core';
import { UtilityService } from './utility.service';

const { Storage } = Plugins;
@Injectable({
  providedIn: 'root',
})

export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService,
    private util: UtilityService,

  ) { }

  
  /**
   * Determines if route can be activated
   * Determine si la route peut être activée pour l'utilisateur
   * @param route 
   * @param state 
   * @returns activate 
   */
  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return this.checkAuth();
  }

  
  /**
   * Checks auth if the token has the right role
   * Verifie si l'utilisateur à le bon role
   * @returns auth
   */
  async checkAuth(): Promise<boolean> {
    console.log((jwt_decode(this.util.token.replace('"', '')) as any).role);
    if ((jwt_decode(this.util.token) as any).role === 'admin') {
      return true;
    } else {
      return false;
    }
    const result = await Storage.get({ key: 'token' }).then(x => {
      if (x.value !== null && x.value !== undefined) {
        // console.log((jwt_decode(x.value) as any).role === 1);
        if ((jwt_decode(x.value) as any).role === 'admin') {
          return true;
        } else {
          return false;
        }
      }
    });
    return result;
  }
}
