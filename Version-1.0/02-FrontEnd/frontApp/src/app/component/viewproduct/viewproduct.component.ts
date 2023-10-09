import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { AddtocartService } from 'src/app/postingService/addtocart.service';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  products: Product[] = [];
  count:string = "in progress";
  cid: any = "-1";

  constructor(
    private productService: DataService,
    private route: ActivatedRoute,
    private router: Router, // Inject Router to navigate
    private addtocart: AddtocartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getSingleProduct();
      this.cid = localStorage.getItem("userid");
    });
  }

 

  getSingleProduct() {
    const hasKey: boolean = this.route.snapshot.paramMap.has('sku');
    if (hasKey) {
      const theKeyword: string = this.route.snapshot.paramMap.get('sku')!;
      this.productService.getSingleProduct(theKeyword).subscribe(data => {
        this.products = data;
      });
    } else {
      // Handle no SKU in route params, e.g., redirect to a product listing page.
      this.router.navigate(['/product-list']);
    }
  }

  onAddButtonClick() {
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[0].sku,
      count: 1
    };
    this.addtocart.addTocart(item);
  }

  onRemoveButtonClick() {
    console.log(localStorage.getItem("userid"), this.products[0].sku);
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[0].sku
    };
    this.addtocart.removeFromcart(item);
  }
}
