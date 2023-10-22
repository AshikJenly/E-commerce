import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AddtocartService } from 'src/app/postingService/addtocart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  total = 0;
  discount = 0;
  tax = 0;
  cartTotal = 0
  
  constructor(private http: HttpClient,private addtocart: AddtocartService){}
  
  async ngOnInit() {
    const cid:any = localStorage.getItem("userid");

    // Fetch total from the service
   await this.addtocart.getTotal(cid).subscribe(response => {
      this.setTotal(response);
      this.setDiscount(response)
      this.setTax(response)
      this.setCartTotal()
    });
  }

  setTotal(total: number) {
    this.total = total;
  }
  setDiscount(total:number){
    const discount = total * 0.05
    this.discount = Math.floor(discount)
  }
  setTax(total:number){
    const tax = total * 0.10
    this.tax = Math.ceil(tax)
  }
  setCartTotal(){
    this.cartTotal = this.total - this.discount + this.tax
  }
}
