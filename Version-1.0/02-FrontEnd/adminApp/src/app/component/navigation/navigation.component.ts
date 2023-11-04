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
    
    const data = this.credserv.getData("isLogin") 
    if(data == "true")
    {
      this.signInorOut = "Sign Out"
      this.signInorOutLink = "/login/logout?=''"
      this.welcome = `Hello! ${this.credserv.getuserName()}`
    }
  
  }

  doSearch(value: string) { 
    this.router.navigateByUrl(`/search/${value}`);
  }
}
