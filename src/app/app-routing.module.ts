import { NgModule } from '@angular/core';
import { GuardService } from 'src/app/services/guard.service';
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
    canActivate: [GuardService]
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
    loadChildren: () => import('./pages/auth/account/account-routing.module').then( m => m.AccountPageRoutingModule),
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/market/products-list/products-list.module').then( m => m.ProductsListPageModule),
    data : {estMenu : 0}
  },
  {
    path: 'menus',
    loadChildren: () => import('./pages/market/products-list/products-list.module').then( m => m.ProductsListPageModule),
    data : {estMenu : 1}
  },
  {
    path: 'us',
    loadChildren: () => import('./pages/whoarewe/whoarewe.module').then( m => m.WhoarewePageModule),
  },
  {
    path: 'myBasket',
    loadChildren: () => import('./pages/market/basket/basket.module').then( m => m.BasketPageModule)
  },
  {
    path: 'order',
    loadChildren: () => import('./pages/market/order/order.module').then( m => m.OrderPageModule)
  },
  {
    path: 'picker-modal',
    loadChildren: () => import('./modal/picker-modal/picker-modal.module').then( m => m.PickerModalPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/auth/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./pages/auth/forget-password/forget-password-routing.module').then( m => m.ForgetPasswordPageRoutingModule)
  },
  {
    path: 'article-detail',
    loadChildren: () => import('./pages/market/article-detail/article-detail.module').then( m => m.ArticleDetailPageModule)
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
