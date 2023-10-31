import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { CredentialService } from 'src/app/service/credential.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {


  signInorOut:string = "Sign In"
  signInorOutLink:string = "/login"
  welcome = ""
  showHoverDiv: boolean = false;

  constructor(private router: Router,private credserv:CredentialService) { }

  ngOnInit() {
    
    if(this.credserv.getData("isLogin") == "true")
    {
      this.signInorOut = "Sign Out"
      this.signInorOutLink = "/login/logout?=''"
      this.welcome = `Hello! ${this.credserv.getuserName()}`
    }
  
  }

  doSearch(value: string) { 
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}
