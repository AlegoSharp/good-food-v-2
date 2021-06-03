import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuardService } from 'src/app/services/guard.service';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:
    [  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full',
    },
    {
      path: 'login',
      loadChildren: () => import('../../auth/login/login.module').then( m => m.LoginPageModule),
    },
    {
      path: 'form/:id',
      loadChildren: () => import('../../form/form.module').then( m => m.FormPageModule),
      canActivate: [GuardService]
    },
    {
      path: 'form',
      redirectTo: 'form/User',
    },
    {
      path: 'home',
      loadChildren: () => import('../../home/home.module').then( m => m.HomePageModule),
    },
    {
      path: 'account',
      loadChildren: () => import('../../auth/account/account.module').then( m => m.AccountPageModule),
    },
    {
      path: 'products',
      loadChildren: () => import('../../market/products-list/products-list.module').then( m => m.ProductsListPageModule),
      data : {estMenu : 0}
    },
    {
      path: 'menus',
      loadChildren: () => import('../../market/products-list/products-list.module').then( m => m.ProductsListPageModule),
      data : {estMenu : 1}
    },
    {
      path: 'us',
      loadChildren: () => import('../../whoarewe/whoarewe.module').then( m => m.WhoarewePageModule),
    },
    {
      path: 'myBasket',
      loadChildren: () => import('../../market/basket/basket.module').then( m => m.BasketPageModule)
    },
    {
      path: 'order',
      loadChildren: () => import('../../market/order/order.module').then( m => m.OrderPageModule)
    },
    {
      path: 'picker-modal',
      loadChildren: () => import('../../../modal/picker-modal/picker-modal.module').then( m => m.PickerModalPageModule)
    },
    {
      path: 'register',
      loadChildren: () => import('../../auth/register/register.module').then( m => m.RegisterPageModule)
    },
    {
      path: 'forgot',
      loadChildren: () => import('../../auth/forget-password/forget-password-routing.module').then( m => m.ForgetPasswordPageRoutingModule)
    },
    {
      path: 'article-detail',
      loadChildren: () => import('../../market/article-detail/article-detail.module').then( m => m.ArticleDetailPageModule)
    },]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
