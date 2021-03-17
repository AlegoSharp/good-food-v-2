import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/auth/login/login.module').then( m => m.LoginPageModule),
  },
  {
    path: 'form/:id',
    loadChildren: () => import('./pages/form/form.module').then( m => m.FormPageModule),
  },
  {
    path: 'form',
    redirectTo: 'form/User',
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/market/products-list/products-list.module').then( m => m.ProductsListPageModule),
  },
  {
    path: 'menus',
    loadChildren: () => import('./pages/market/menus-list/menus-list.module').then( m => m.MenusListPageModule),
  },
  {
    path: 'us',
    loadChildren: () => import('./pages/whoarewe/whoarewe.module').then( m => m.WhoarewePageModule),
  },
  {
    path: 'myBasket',
    loadChildren: () => import('./pages/market/basket/basket.module').then( m => m.BasketPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
