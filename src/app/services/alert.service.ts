import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(public alertController: AlertController) { }
  
  async presentAlertOk(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: '____',
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }
}