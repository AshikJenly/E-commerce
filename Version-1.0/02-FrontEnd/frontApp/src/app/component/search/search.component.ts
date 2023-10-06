import { Component } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  signInorOut:string = "Sign In"
  signInorOutLink:string = "/login"


  constructor(private router: Router) { }

  ngOnInit() {
    
    if(sessionStorage.getItem("isLogin") === "true")
    {
      this.signInorOut = "Sign Out"
      this.signInorOutLink = "/login/logout?=''"
    }
  
  }

  doSearch(value: string) { 
    console.log(`value=${value}`);
    this.router.navigateByUrl(`/search/${value}`);
  }
}
