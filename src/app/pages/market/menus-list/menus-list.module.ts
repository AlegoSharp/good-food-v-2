import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenusListPageRoutingModule } from './menus-list-routing.module';

import { MenusListPage } from './menus-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenusListPageRoutingModule
  ],
  declarations: [MenusListPage]
})
export class MenusListPageModule {}
