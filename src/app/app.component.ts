import { Component, OnInit } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger } from '@angular/animations';
import { Article } from './models/Article';
import jwt_decode from 'jwt-decode';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
export const routeTransitionAnimations = trigger('triggerName', []);

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  animations: [routeTransitionAnimations]
})
export class AppComponent {
  constructor(private router: Router) {}

  public basketCount = 0;
  public IsConnected = false;
  private storageBusy = false;
  private token = '';
  private role = '';

  backHome(){
    this.router.navigateByUrl('/home');
  }

  showMenu(){
    let myElementRef = window.document.getElementById('leftMenu');
    const fadeOut = createAnimation()
    .addElement(myElementRef)
    .duration(500)
    .fromTo('opacity', '1', '0');
    if(window.document.getElementById('leftMenu').style.display === 'none'){
      window.document.getElementById('leftMenu').style.display = 'block';
      this.fadeIn('leftMenu');
    }else{
      fadeOut.play().then(()=>{      
        window.document.getElementById('leftMenu').style.display = 'none';
      });
    }
  }

  fadeIn(elementID: string){
    let myElementRef = window.document.getElementById(elementID);
    const fadeIn = createAnimation()
    .addElement(myElementRef)
    .duration(500)
    .fromTo('opacity', '0', '1');
    fadeIn.play();
  }

  fadeOut(elementID: string){
    let myElementRef = window.document.getElementById(elementID);
    const fadeOut = createAnimation()
    .addElement(myElementRef)
    .duration(300)
    .fromTo('opacity', '1', '0');
  }

  async prepareRoute() {
    if (this.token === ''){
      if (!this.storageBusy){
        this.storageBusy = true;
        setTimeout(async () => {
          this.basketCount = (JSON.parse(await (await Storage.get({ key: 'basket' })).value) as Array<Article>).length;
          await this.getToken();
          this.storageBusy = false;
        }, 500);
      }
    }else{
      if (!this.storageBusy){
        this.storageBusy = true;
        setTimeout(async () => {
          this.basketCount = (JSON.parse(await (await Storage.get({ key: 'basket' })).value) as Array<Article>).length;
          this.storageBusy = false;
        }, 500);
      }
    }
  }

  async getToken(){
    if (!this.IsConnected){
        const ret = await Storage.get({ key: 'token' });
        if (ret.value !== null){
          //  console.log(ret.value);
          this.token = (ret.value);
          this.role = (jwt_decode(this.token) as any).role;
          this.IsConnected = true;
        }
    }
  }
}
