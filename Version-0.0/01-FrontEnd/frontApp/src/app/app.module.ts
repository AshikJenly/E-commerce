import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  // Your other routes
  { path: 'allproducts', component: ProductsComponent },
  {path:'viewcart',component:CartComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
