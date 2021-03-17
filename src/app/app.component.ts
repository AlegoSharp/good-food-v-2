import { Component, OnInit } from '@angular/core';
import { createAnimation, Animation } from '@ionic/core';
import { Router, RouterOutlet } from '@angular/router';
import { trigger } from '@angular/animations';
import { Plugins } from '@capacitor/core';
import { async } from '@angular/core/testing';

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

  public IsConnected = false;
  private storageBusy = false;
  private token = "";
  ngOnInit(){

  }
  backHome(){
    this.router.navigateByUrl("/home");
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
    //this.fadeIn('content-for-anim');
    if(this.token === ""){
      if(!this.storageBusy){
        this.storageBusy = true;
        setTimeout(async ()=>{
          await this.getToken();
          this.storageBusy = false;
        },1000);
      }
    }

  }
  
  async getToken(){
    if(!this.IsConnected){
        const ret = await Storage.get({ key: 'token' });
        if(ret.value !== null){
          console.log(ret.value);
          this.token = (ret.value);
          this.IsConnected = true;
        }
    }
  }
}
