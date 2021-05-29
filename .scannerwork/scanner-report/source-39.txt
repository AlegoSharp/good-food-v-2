import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.page.html',
  styleUrls: ['./forget-password.page.scss'],
})
export class ForgetPasswordPage implements OnInit {

  public email: string;

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  reset(){
    this.presentToast('Verification mail sent', false, 'bottom', 2100);
  }

  async presentToast(message: string, showButton: boolean, position: 'top' | 'bottom' | 'middle', duration: number) {
    const toast = await this.toastController.create({
      message: message as string,
      position: position as 'top' | 'bottom' | 'middle',
      duration: duration as number,
      keyboardClose: showButton as boolean
    });
    toast.present();
  }

}
