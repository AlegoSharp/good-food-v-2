import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WhoarewePage } from './whoarewe.page';

const routes: Routes = [
  {
    path: '',
    component: WhoarewePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WhoarewePageRoutingModule {}
