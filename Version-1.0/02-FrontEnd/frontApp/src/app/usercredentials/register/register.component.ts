import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  url:String = 'http://localhost:4201/api/customers';
 
  constructor(private http: HttpClient) {}
  OnSubmit(form :NgForm)
  {
    
    console.log("submitted",form.value.firstname)
  }
}
