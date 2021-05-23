import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { Commande } from 'src/app/models/Commande';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { Utilisateur } from 'src/app/models/User';
import { FormService } from 'src/app/services/form.service';
import { GuardService } from 'src/app/services/guard.service';
import { StorageService } from 'src/app/services/storage.service';
import jwt_decode from 'jwt-decode';
import { Article } from 'src/app/models/Article';
import { AlertService } from 'src/app/services/alert.service';

const { Storage } = Plugins;

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss']
})
export class OrderPage implements OnInit {

  public Articles: Array<LigneCommande>;
  public Commande: Commande;
  public CommandeApi: Commande;
  public User: Utilisateur;

  public userId: number;

  // Permet de creer une commande pour un autre client
  public ModeSupport = false;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private guardService: GuardService,
    private formService: FormService,
    private toastController: ToastController,
    private alertService: AlertService
  ){ }

  ngOnInit() {
    this.Commande = new Commande();
    this.guardService.checkAuth().then(result => {
      this.ModeSupport = result;
    });
    this.getUser();
    this.Commande.lignesCommande = new Array<LigneCommande>();
  }

  ionViewDidEnter(){
    this.storageService.getObject('basket').then(value => {
        return (value as unknown) as Array<LigneCommande>;
    }).then(x => {
      this.Articles = x;
      this.Commande.lignesCommande = x;
/*    g   x.forEach(element =>{
        const ligne = new LigneCommande();
        ligne.article = element.article;
        ligne.idArticle = element.article.idArticle;
        ligne.idCommande = this.Commande.idCommande;
        ligne.quantiteArticle = element.quantiteArticle;
        this.Commande.lignesCommande.push(ligne);
      }); */
    });
  }

  async createOrder(){
    this.CommandeApi = JSON.parse(JSON.stringify(this.Commande));
/* 
    this.CommandeApi.lignesCommande.forEach(element =>{
      element.idArticle = element.article.idArticle;
      delete element.article;
    }); */

    const lignesCommande = JSON.parse(JSON.stringify(this.Commande.lignesCommande));

    delete this.CommandeApi.lignesCommande;

    this.CommandeApi.utilisateur = this.User;

    this.formService.postObject('Commande', JSON.stringify(this.CommandeApi)).toPromise().then((responseCommande: any) => {
      lignesCommande.forEach(element => {
        element.idCommande = responseCommande.idCommande;
        element.idArticle = element.article.idArticle;
        delete element.article;
        delete element.idLigneCommande;
      });
      console.log(lignesCommande);
      console.log(JSON.stringify(lignesCommande));
      this.formService.postObject('Ligne_Commande', JSON.stringify(lignesCommande)).toPromise().then((responseLignesCommande: any) => {
        this.presentToast(responseLignesCommande, false, 'bottom', 2100);
      }).catch(reason => {
        this.alertService.presentAlertOk('Erreur', reason.message);
      });
    }).catch(reason => {
      this.alertService.presentAlertOk('Erreur', reason.message);
    });


  }

  async getUser(){
    Storage.get({ key: 'token' }).then((x: any) => {
      if (x.value !== null && x.value !== undefined){
        console.log((jwt_decode(x.value) as any));
        this.userId = (jwt_decode(x.value) as any).id;
        this.formService.getList('User/id' + this.userId).toPromise().then((responseUser: any) => {
          if (responseUser !== undefined){
            this.User = responseUser as Utilisateur;
            this.formService.getList('Adresse_Utilisateur?idUtilisateur=' + this.userId).toPromise().then((responseAdresse: any) => {
              if (responseAdresse !== undefined){
                this.Commande.idAdresseLivraison = responseAdresse[0].idAdresse;
                this.Commande.idAdresseFacturation = responseAdresse[1].idAdresse ;
              }
            });
          }
        });
      }
    });
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
