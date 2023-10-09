import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { AddtocartService } from 'src/app/postingService/addtocart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  cid: any = "0";
  total = 0;
  counts :number[]= []
  constructor(
    private http: HttpClient,
    private dataservice: DataService,
    private addtocart: AddtocartService
  ) {}

  setTotal(total: number) {
    this.total = total;
  }

  ngOnInit() {
    this.cid = localStorage.getItem("userid");

    // Fetch total from the service
    this.addtocart.getTotal(this.cid).subscribe(response => {
      this.setTotal(response);
    });
    // Fetch cart products
    this.dataservice.getCartProducts(this.cid).subscribe(data => {
      console.log(data);
      this.products = data;
      
      // Initialize counts array with zeros for each product
      this.counts = new Array(this.products.length).fill(0);

      // Fetch counts for each product
      for (let i = 0; i < this.products.length; i++) {
        this.getcountofproduct(this.products[i].sku, i);
      }
    });

  }
  getcountofproduct(sku: string, index: number) {
    this.addtocart.getCountForSkuAndCid(sku, this.cid).subscribe(countResponse => {
      this.counts[index] = countResponse;
    });
  }

  onRemoveButtonClick(i:number) {
    console.log(localStorage.getItem("userid"), this.products[i].sku);
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[i].sku
    };
    this.addtocart.removeFromcart(item);
    window.location.reload();
  }

  onRemoveOneButtonClick(i:number) {
    console.log(localStorage.getItem("userid"), this.products[i].sku);
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[i].sku
    };
    this.addtocart.removeFromcartone(item);
    window.location.reload();
  }
  onAddOneButtonClick(i:number) {
    console.log(localStorage.getItem("userid"), this.products[i].sku);
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[i].sku
    };
    this.addtocart.addTocart(item);
    window.location.reload();
  }
}
