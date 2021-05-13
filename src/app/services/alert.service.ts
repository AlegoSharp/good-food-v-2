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
  async getAlertOuiNon(title: string, message: string): Promise<HTMLIonAlertElement>{
    const alert = await this.alertController.create({
      header: title,
      subHeader: '____',
      message: message,
      buttons: ['Oui','Non']
    });
    return alert;
  }

  async presentAlertOuiNon(title: string, message: string,yesAction:any) {
    let alert = await this.alertController.create({
      header: title,
      buttons: [
        {
          text: 'Annuler',
          role: 'Annuler'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log("test")
            yesAction();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentMarketDialogQty():Promise<HTMLIonAlertElement> {
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