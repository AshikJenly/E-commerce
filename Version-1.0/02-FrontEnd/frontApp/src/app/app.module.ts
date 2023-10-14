import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './component/products/products.component';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';

import { HttpClientModule } from '@angular/common/http';
import { DataService } from './service/data.service';
import { ProductCategoryComponent } from './component/product-category/product-category.component';
import { SearchComponent } from './component/search/search.component';
import { ViewproductComponent } from './component/viewproduct/viewproduct.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './usercredentials/login/login.component';
import { RegisterComponent } from './usercredentials/register/register.component';
import { AuthGuard } from './usercredentials/auth.guard';
import { CredentialService } from './service/credential.service';
import { AddtocartService } from './postingService/addtocart.service';
import { RegisterService } from './postingService/register.service';
import { FooterComponent } from './component/footer/footer.component';

const routes: Routes = [
  // Your other routes
  {path: '', component: ProductsComponent},
  {path: 'search/:keyword', component: ProductsComponent},
  {path: 'category/:id', component: ProductsComponent},
  {path: 'category', component: ProductsComponent},
  {path: 'singleprod/:sku', component:ViewproductComponent },
  { path: 'allproducts', component: ProductsComponent },
  {path:'viewcart',component:CartComponent,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'login/:logout',component:LoginComponent},
  {path:'register',component:RegisterComponent}


];

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CartComponent,
    ProductCategoryComponent,
    SearchComponent,
    ViewproductComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  exports:[RouterModule],
  providers: [DataService,AuthGuard,CredentialService,AddtocartService,RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
