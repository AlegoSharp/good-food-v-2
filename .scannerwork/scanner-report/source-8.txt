import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PickerModalPage } from './picker-modal.page';

const routes: Routes = [
  {
    path: '',
    component: PickerModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PickerModalPageRoutingModule {}
