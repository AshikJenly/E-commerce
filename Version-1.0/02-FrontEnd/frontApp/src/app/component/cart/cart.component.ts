import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Product } from 'src/app/common/product';
import { AddtocartService } from 'src/app/postingService/addtocart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  products :Product[]=[]
  cid:any = "0"
  constructor(private http:HttpClient,private dataservice:DataService,private addtocart:AddtocartService) { }

  ngOnInit()
  {
    console.log("init")
    this.cid = localStorage.getItem("userid")
     this.dataservice.getCartProducts(this.cid).subscribe(
      data => {
        console.log(data)
        this.products = data;
      }
    )
    
  }
  onRemoveButtonClick()
  {
    console.log(localStorage.getItem("userid"),this.products[0].sku)
    const item = {
      "cid":localStorage.getItem("userid"),
      "sku":this.products[0].sku
    }
    this.addtocart.removeFromcart(item)
    window.location.reload()
  } 
}
