import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WhoarewePageRoutingModule } from './whoarewe-routing.module';

import { WhoarewePage } from './whoarewe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WhoarewePageRoutingModule
  ],
  declarations: [WhoarewePage]
})
export class WhoarewePageModule {}
