import { Injectable } from '@angular/core';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { PickerModalPage } from '../modal/picker-modal/picker-modal.page';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  constructor(
    public alertController: AlertController,
    public modalController: ModalController,
    private toastController: ToastController
  ) { }

  async presentAlertOk(title: string, message: string) {
    const alert = await this.alertController.create({
      header: title,
      subHeader: '____',
      message: message as string,
      buttons: ['OK'],
      cssClass: 'custom-alertDanger'
    });
    await alert.present();
  }
  async getAlertOuiNon(title: string, message: string): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: title,
      subHeader: '____',
      message: message as string,
      buttons: ['Oui', 'Non']
    });
    return alert;
  }

  async presentAlertOuiNon(title: string, message: string, yesAction: any) {
    const alert = await this.alertController.create({
      header: title,
      buttons: [
        {
          text: 'Annuler',
          role: 'Annuler'
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('test');
            yesAction();
          }
        }
      ]
    });
    await alert.present();
  }

  async presentMarketDialogQty(): Promise<HTMLIonAlertElement> {
    const alert = await this.alertController.create({
      header: 'Quelle quantité souhaitez-vous commander?',
      inputs: [
        {
          name: 'Quantity',
          type: 'number',
          placeholder: 'Quantité',
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
  async presentModal(tite: string, route: string): Promise<HTMLIonModalElement> {
    const modal = await this.modalController.create({
      component: PickerModalPage,
      componentProps: {
        title: tite,
        route: route as string
      },

      cssClass: 'modal-custom-class'
    });
    return modal;
  }

  async presentToast(type: 'Error' | 'Success', message: string, showButton: boolean) {
    const typeClass = type === 'Success' ? 'toast-custom-class-success' : 'toast-custom-class-error';
    const toast = await this.toastController.create({
      message: message as string,
      position: 'bottom',
      duration: 2100,
      keyboardClose: showButton,
      cssClass: ['toast-custom-class', typeClass]
    });
    toast.color = 'dark';
    toast.present();
  }
}
