import { NgModule } from '@angular/core';
import { GuardService } from 'src/app/services/guard.service';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./pages/menu/menu/menu.module').then( m => m.MenuPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  providers: [
    GuardService
  ]
})
export class AppRoutingModule {}
