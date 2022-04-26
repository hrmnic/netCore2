import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { ShopComponent } from './shop/shop.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import {BasketComponent} from './basket/basket.component'
const routes: Routes = [
  { path: '', component: HomeComponent, data: { breadcrumb: 'Home' } },
  { path: 'shop', component: ShopComponent, data: { breadcrumb: 'Shop' } },
  {
    path: 'test-error',
    component: TestErrorComponent,
    data: { breadcrumb: 'test-error' },
  },
  {
    path: 'server-error',
    component: ServerErrorComponent,
    data: { breadcrumb: 'server-error' },
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data: { breadcrumb: 'not-found' },
  },
  {
    path: 'shop/:id',
    component: ProductDetailsComponent,
    data: { breadcrumb: { alias: 'shopDetail' } },
  },
  { path: 'basket', loadChildren: ()=> import ("./basket/basket.module").then(mod=>mod.BasketModule), data: { breadcrumb: 'basket' } },
  { path: 'checkout', loadChildren: ()=> import ("./checkout/checkout.module").then(mod=>mod.CheckoutModule), data: { breadcrumb: 'Checkout' } },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
