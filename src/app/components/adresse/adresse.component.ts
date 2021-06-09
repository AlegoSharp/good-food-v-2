import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adresse_Utilisateur } from 'src/app/models/Adresse_Utilisateur';
import { Commande } from 'src/app/models/Commande';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { AlertService } from 'src/app/services/alert.service';
import { FormService } from 'src/app/services/form.service';
import { UtilityService } from 'src/app/services/utility.service';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.scss'],
})
export class AdresseComponent implements OnInit {

  @Input() adr: any;

  public user: Utilisateur;

  constructor(
    private util: UtilityService,
    private formService: FormService,
    private alertService: AlertService,
    ) { }

  ngOnInit() {
    this.user = this.util.userConnected;
    if (this.adr === undefined){
      this.adr = new Adresse_Utilisateur();
    }
  }

  async update(){
    this.formService.postEditObject('Adresse_Utilisateur', this.adr).toPromise().then(Response => {
    }).catch(reason => {
      this.alertService.presentAlertOk('Erreur', reason.message);
    });
  }

}
