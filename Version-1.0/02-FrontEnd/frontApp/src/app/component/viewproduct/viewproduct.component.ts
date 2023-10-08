import { Component, OnInit } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { AddtocartService } from 'src/app/postingService/addtocart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
 products :Product[]=[]
 constructor(private productService: DataService,private route: ActivatedRoute,private addtocart:AddtocartService){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getsingleproduct();
    });
  }


  getsingleproduct()
  {
    var haskey:boolean = this.route.snapshot.paramMap.has('sku');
    console.log(haskey);
    if(haskey)
    {
    const theKeyword: string = this.route.snapshot.paramMap.get('sku')!;
    console.log(theKeyword);
    this.productService.getSingleProduct(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )

  }
  }

  onAddButtonClick()
  {
    const item = {
      "cid":localStorage.getItem("userid"),
      "sku":this.products[0].sku,
      "count":1
    }
    this.addtocart.addTocart(item)

  }
  onRemoveButtonClick()
  {
    console.log(localStorage.getItem("userid"),this.products[0].sku)
    const item = {
      "cid":localStorage.getItem("userid"),
      "sku":this.products[0].sku
    }
    this.addtocart.removeFromcart(item)
  }
}
