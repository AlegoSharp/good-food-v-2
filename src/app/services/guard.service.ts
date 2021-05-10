import { Injectable } from '@angular/core';
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import {StorageService} from './storage.service'
import jwt_decode from "jwt-decode";
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Injectable()
export class GuardService implements CanActivate {

  constructor(
    private router: Router,
    private storageService: StorageService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let result = false;
    Storage.get({ key: 'token' }).then(x=> {
      if(x.value !== null && x.value !== undefined){
        if((jwt_decode(x.value) as any).role === "user"){
          result =  false;
        }else{
          result =  true;
        }
      }
    });
  return result;
  }
}