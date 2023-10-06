import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  url: string = 'http://localhost:4201/api/customers/';
  formData = {
    "firstname": '',
    "lastname": '',
    "email": '',
    "password": ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  OnSubmit(form: NgForm) {
   

    if (this.isValidReg(form))
    {
      console.log("submitted", this.formData);
      sessionStorage.setItem("isRegisteredNow","true")
    
      this.router.navigate(["/login"])
    }
    else
    {
      this.router.navigate(["/register"])
    }
  }
  isValidReg(form:NgForm):boolean
  {
    return true
  }
}
