import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialService } from 'src/app/service/credential.service';
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
  constructor(private http: HttpClient, private router:ActivatedRoute,private rout:Router,private credserv:CredentialService) {}

  ngOnInit(){
    
    // For message
    if(this.credserv.getData("isRegisteredNow") == "true")
    {
      this.message = "Successfully Registered"
     this.credserv.setData("isRegisteredNow","false")
    }
      // to logout ?
    this.logout= this.router.snapshot.paramMap.has('logout');
    
    if(this.logout)
    {

      this.LogOut()
      this.rout.navigate(["/home"])
    }

    if(this.credserv.getData("isLogin") === "true")
    {
      this.rout.navigate(["/home"])
    }
  }
 async OnSubmit(form: NgForm) {

    const email = this.formData.email
    const password = this.formData.password

    const isvalid = await this.credserv.getUserByEmailAndPassword(email,password)
    if(isvalid){
      this.credserv.setData("isLogin","true")
      this.rout.navigate(["/home"])

    }
    else{
      this.message = "email or password wrong"
    }
  }
  
  LogOut()
  {
    this.credserv.setData("isLogin","false")
    
  }


}
