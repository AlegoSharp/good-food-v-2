import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from './storage.service'
import jwt_decode from 'jwt-decode';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService
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
    const result = await Storage.get({ key: 'token' }).then(x => {
      if (x.value !== null && x.value !== undefined) {
        // console.log((jwt_decode(x.value) as any).role === 1);
        if ((jwt_decode(x.value) as any).role === 2) {
          return true;
        } else {
          return false;
        }
      }
    });
    return result;
  }
}
