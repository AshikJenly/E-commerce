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

const routes: Routes =[
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'login/:logout',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'addproduct',component:AddproductComponent,canActivate:[AuthGuard]},
  {path:'addcategory',component:AddcategoryComponent,canActivate:[AuthGuard]}
   
]

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    AddcategoryComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent
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
