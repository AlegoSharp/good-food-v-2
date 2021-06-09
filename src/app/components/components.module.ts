import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AdresseComponent } from './adresse/adresse.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HeaderComponent, AdresseComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  exports: [HeaderComponent, AdresseComponent]
})
export class ComponentsModule { }
