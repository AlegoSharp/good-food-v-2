import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plugins } from '@capacitor/core';
import { ToastController } from '@ionic/angular';
import { Commande } from 'src/app/models/Commande';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { FormService } from 'src/app/services/form.service';
import { GuardService } from 'src/app/services/guard.service';
import { StorageService } from 'src/app/services/storage.service';
import jwt_decode from 'jwt-decode';
import { Article } from 'src/app/models/Article';
import { AlertService } from 'src/app/services/alert.service';
import { UtilityService } from 'src/app/services/utility.service';
import { Adresse_Utilisateur } from 'src/app/models/Adresse_Utilisateur';
import { threadId } from 'worker_threads';

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
  public addressLivr: Adresse_Utilisateur;
  public addressFact: Adresse_Utilisateur;

  public userId: number;

  // Permet de creer une commande pour un autre client
  public ModeSupport = false;

  constructor(
    private storageService: StorageService,
    private router: Router,
    private guardService: GuardService,
    private formService: FormService,
    private toastController: ToastController,
    private alertService: AlertService,
    private util: UtilityService,
  ) { }

  ngOnInit() {

    this.Commande = new Commande();
    this.guardService.checkAuth().then(result => {
      this.ModeSupport = result;
    });
    this.getUser();
    this.Commande.lignesCommande = new Array<LigneCommande>();
    this.addressFact = this.util.addressFact;
    this.addressLivr = this.util.addressLivr;
  }

  ionViewDidEnter() {
    this.storageService.getObject('basket').then(value => {
      return (value as unknown) as Array<LigneCommande>;
    }).then(x => {
      this.Articles = x;
      this.Commande.lignesCommande = x;
    });
  }

  async createOrder() {
    this.Commande.totalHt = this.Commande.calculerTotalHt();
    this.Commande.f_totalTtc = this.Commande.calculerTotalTtc();
    this.Commande.b_idUtilisateur = this.util.userConnected.a_idUtilisateur;
    this.Commande.c_idAdresseFacturation = this.util.addressFact.a_idAdresse;
    this.Commande.d_idAdresseLivraison = this.util.addressLivr.a_idAdresse;
    this.Commande.lignesCommande.forEach(element => {
      element.e_sousTotalTtc = (element.article.g_prixArticleHt * element.d_quantiteArticle) * (1 + (element.article.h_tva / 100));
    });
    this.CommandeApi = JSON.parse(JSON.stringify(this.Commande));
    console.log((this.Commande));


    delete this.CommandeApi.lignesCommande;

    this.CommandeApi.utilisateur = this.User;
    this.util.franchisesInBasket.forEach(element => {
      this.CommandeApi.h_idFranchise = this.util.userConnected.j_idFranchise;
      this.formService.postObject('Commande', JSON.stringify(this.CommandeApi)).toPromise().then((responseCommande: any) => {
        const lignesCommande = JSON.parse(JSON.stringify(this.Commande.lignesCommande.filter(x => x.article.c_idFranchise === element)));
        lignesCommande.forEach(element => {
          element.b_idCommande = responseCommande;
          element.c_idArticle = element.article.a_idArticle;
          delete element.article;
          delete element.a_idLigneCommande;
        });
        console.log(lignesCommande);
        this.formService.postObject('Ligne_Commande', JSON.stringify(lignesCommande)).toPromise().then((responseLignesCommande: any) => {
          this.presentToast(responseLignesCommande, false, 'bottom', 2100);
        }).catch(reason => {
          this.alertService.presentAlertOk('Erreur', reason.message);
        });
      }).catch(reason => {
        this.alertService.presentAlertOk('Erreur', reason.message);
      });  
    });
  }

  async getUser() {
    Storage.get({ key: 'token' }).then((x: any) => {
      if (x.value !== null && x.value !== undefined) {
        console.log((jwt_decode(x.value) as any));
        this.userId = (jwt_decode(x.value) as any).id;
        this.formService.getList('Utilisateur/' + this.userId).toPromise().then((responseUser: any) => {
          if (responseUser !== undefined) {
            this.User = responseUser as Utilisateur;
            this.formService.getList('Adresse_Utilisateur?idUtilisateur=' + this.userId).toPromise().then((responseAdresse: any) => {
              if (responseAdresse !== undefined) {
                this.Commande.d_idAdresseLivraison = responseAdresse[0].idAdresse;
                if (responseAdresse.length > 1){
                  this.Commande.c_idAdresseFacturation = responseAdresse[1].idAdresse;
                }else{
                  this.Commande.c_idAdresseFacturation = responseAdresse[0].idAdresse;
                }
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
