import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  message : string =""
  logout : boolean =  false
  formData = {
    "email":"",
    "password":""
  }
  constructor(private http: HttpClient, private router:ActivatedRoute,private rout:Router) {}

  ngOnInit(){
    
    // For message
    if(sessionStorage.getItem("isRegisteredNow") == "true")
    {
      this.message = "Successfully Registered"
      sessionStorage.setItem("isRegisteredNow","false")
    }
      // to logout ?
    this.logout= this.router.snapshot.paramMap.has('logout');
    
    if(this.logout)
    {

      this.LogOut()
      this.rout.navigate(["/allproducts"])
    }

    if(sessionStorage.getItem("isLogin") === "true")
    {
      this.rout.navigate(["/allproducts"])
    }
  }
  OnSubmit(form: NgForm) {

    sessionStorage.setItem("isLogin","true")
    this.rout.navigate(["/allproducts"])
  }
  LogOut()
  {
    sessionStorage.setItem("isLogin","false")

  }


}
