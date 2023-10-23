import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AddtocartService } from 'src/app/postingService/addtocart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  cid: any = "0";
  message : any = ""
  baseUrl = "http://localhost:4201/cartcontroller/purchaseduser"
  constructor(
    private http: HttpClient,
    private dataservice: DataService,
    private addtocart: AddtocartService,
    private router:Router
  ) {}

   async ngOnInit() {

    this.cid = localStorage.getItem("userid");
    await this.placeOrder();

    // this.router.navigate(['/viewcart']);
    
  }

  setMessage(message:any)
  {
      this.message = message;
  }

  placeOrder():any
  {

    const url = `${this.baseUrl}?cid=${this.cid}`;
    this.http.get(url, { responseType: 'text' }).subscribe(
      (result) => {
        console.log('HTTP GET request result:', result);
        this.setMessage(result);
        // Process the response string here
      },
      (error) => {
        console.error('HTTP GET request error:', error);
        this.setMessage("Server error, Please contace support team!")
        // Handle the error here
      }
    );
    

  }

}
