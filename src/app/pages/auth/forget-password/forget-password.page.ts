import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  public email: string

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  reset(){
    if(this.validateEmail(this.email)){
      this.presentToast('Verification mail sent', false, 'bottom', 2100);
    }
    else{
      this.presentToast('Wrong Input!', true, 'bottom', 2100);
    }
  }
  
  async presentToast(message, show_button, position, duration) {
    const toast = await this.toastController.create({
      message: message,
      position: position,
      duration: duration,
      keyboardClose: show_button
    });
    toast.present();
  }
  validateEmail(email: string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}
