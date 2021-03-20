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

  async presentMarketDialogQty() {
    let result = 0;
    let alert = await this.alertController.create({
      header: "Quelle quantité souhaitez-vous commander?",
      inputs:[
        {
          name: 'Quantity',
          type: 'text',
          placeholder: 'Quantité'
        }],
      buttons: [
        {
          text: 'Annuler',
          role: 'Annuler'
        },
        {
          text: 'Okay',
          handler: (alertData) => {
            alert.dismiss(alertData);
          }
        }
      ]
    });
    return alert;
  }
}