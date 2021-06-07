import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormPageRoutingModule } from './form-routing.module';

import { FormPage } from './form.page';

import { Article } from 'src/app/models/Article';
import { Utilisateur } from 'src/app/models/Utilisateur';
import { Adresse_Fournisseur } from 'src/app/models/Adresse_Fournisseur';
import { Adresse_Utilisateur } from 'src/app/models/Adresse_Utilisateur';
import { Article_Allergene } from 'src/app/models/Article_Allergene';
import { Article_Promo } from 'src/app/models/Article_Promo';
import { Categorie_Article } from 'src/app/models/Categorie_Article';
import { Commande } from 'src/app/models/Commande';
import { Fournisseur } from 'src/app/models/Fournisseur';
import { Franchise } from 'src/app/models/Franchise';
import { Groupe_Franchise } from 'src/app/models/Groupe_Franchise';
import { LigneCommande } from 'src/app/models/LigneCommande';
import { Promo } from 'src/app/models/Promo';
import { Aliases } from 'src/app/models/models-ressources/Aliases';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormPageRoutingModule,
  ],
  declarations: [FormPage],
  exports:[
    Article,
    Utilisateur,
    Adresse_Fournisseur,
    Adresse_Utilisateur,
    Article_Allergene,
    Article_Promo,
    Categorie_Article,
    Commande,
    Fournisseur,
    Franchise,
    Groupe_Franchise,
    LigneCommande,
    Promo,
    Aliases
  ]
})
export class FormPageModule {}
