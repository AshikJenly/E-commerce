import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Product } from 'src/app/common/product';
import { AddtocartService } from 'src/app/postingService/addtocart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent {
  cid: any = "0";
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



  placeOrder():any
  {

      const url = `${this.baseUrl}?cid=${this.cid}`;
      this.http.get(url).subscribe(
        (result) => {
          console.log('HTTP GET request result:', result);
        },
        (error) => {
          console.error('HTTP GET request error:', error);
        }
      );

  }

}
