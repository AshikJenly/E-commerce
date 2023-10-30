import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { CredentialService } from 'src/app/service/credential.service';
import { RegisterService } from 'src/app/service/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  url: string = 'http://localhost:4201/api/adminusers/';
  errormessage:string = ""
  formData = {
    "firstname": '',
    "lastname": '',
    "email": '',
    "password": '',
    "shopname":'',
    "pannumber":'',
    "aadhar":''
  };

  constructor(private http: HttpClient, private router: Router,private credserv:CredentialService,private register:RegisterService) {}

  OnSubmit(form: NgForm) {
   

    if (this.isValidReg(form))
    {
      console.log("submitted", this.formData);

      this.register.postuserData(this.formData).subscribe(
        (response) => {
          // Handle the response from the server (e.g., success message)
          console.log('Response:', response);
        },
        (error) => {
          // Handle any errors that occur during the POST request
          console.error('Error:', error);
        }
      );
      this.credserv.setData("isRegisteredNow","true")
      
      this.router.navigate(["/login"])
    }
    else
    {
      this.router.navigate(["/register"])
    }
  }
  isValidReg(form:NgForm):boolean
  {
    if (!form.valid) {
      console.error('Form is invalid. Please fill in all required fields.');
      this.errormessage = 'Form is invalid. Please fill in all required fields.'
      return false;
    }
  
    // Custom validation checks
    if (this.formData.password.length < 8) {
      console.error('Password must be at least 8 characters long.');
      this.errormessage = 'Password must be at least 8 characters long.'
      return false;
    }
  
    // Validate email format using a regular expression
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(this.formData.email)) {
      this.errormessage = 'Invalid email format.'
      console.error('Invalid email format.');
      return false;
    }
    return true
  }
}
