import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartSummaryPageComponent } from './cart-summary-page/cart-summary-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductsPageComponent } from './products-page/products-page.component';

const routes: Routes = [
  { path: 'products', component: ProductsPageComponent},
  { path: 'home', component: HomePageComponent},
  {
    path: 'cart-summary', 
    component: CartSummaryPageComponent
  },
  { path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
