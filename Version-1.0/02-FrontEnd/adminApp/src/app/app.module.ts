import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { AddcategoryComponent } from './component/addcategory/addcategory.component';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './usercredentials/auth.guard';
import { CredentialService } from './service/credential.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './component/home/home.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { FooterComponent } from './component/footer/footer.component';
import { EditProductComponent } from './component/edit-product/edit-product.component';

const routes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'login/:logout',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addproduct',component:AddproductComponent,canActivate:[AuthGuard]},
  {path:'addcategory',component:AddcategoryComponent,canActivate:[AuthGuard]},
  {path:'editproduct',component:EditProductComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    AddcategoryComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavigationComponent,
    FooterComponent,
    EditProductComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  exports:[RouterModule],
  providers: [AuthGuard,CredentialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
