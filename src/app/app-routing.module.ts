import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/shoes/shoes.module').then(m => m.ShoesModule) }, 
  { path: 'shoes', loadChildren: () => import('./pages/shoes/shoes.module').then(m => m.ShoesModule) },
  { path: 't-shirt', loadChildren: () => import('./pages/t-shirt/t-shirt.module').then(m => m.TShirtModule) },
  { path: 'cart', loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartModule) },
  { path: 'bill', loadChildren: () => import('./pages/bill/bill.module').then(m => m.BillModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
