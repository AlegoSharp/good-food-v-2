import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PickerModalPageRoutingModule } from './picker-modal-routing.module';

import { PickerModalPage } from './picker-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PickerModalPageRoutingModule
  ],
  declarations: [PickerModalPage]
})
export class PickerModalPageModule {}
