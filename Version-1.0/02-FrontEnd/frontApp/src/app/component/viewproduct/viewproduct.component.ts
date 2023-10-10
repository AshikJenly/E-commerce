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
  count = 0;
  cid: any = "-1";

  constructor(
    private productService: DataService,
    private route: ActivatedRoute,
    private router: Router, // Inject Router to navigate
    private addToCart:AddtocartService
  ) {}

  setCount(count: number) {
    this.count = count;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getSingleProduct();
      this.cid = localStorage.getItem("userid");
      // Fetch count for the product
      this.getCountForProduct(this.products[0].sku);
    });
  }

  getSingleProduct() {
    const hasKey: boolean = this.route.snapshot.paramMap.has('sku');
    if (hasKey) {
      const theKeyword: string = this.route.snapshot.paramMap.get('sku')!;
      this.productService.getSingleProduct(theKeyword).subscribe(data => {
        this.products = data;

        // Fetch the count for the product cart
        this.getCountForProductCart(this.products[0].sku);
      });
    } else {
      // Handle no SKU in route params, e.g., redirect to a product listing page.
      this.router.navigate(['/product-list']);
    }
  }

  getCountForProduct(sku: string) {
    // Fetch count for the product
    this.addToCart.getCountForSkuAndCid(sku, this.cid).subscribe(countResponse => {
      this.setCount(countResponse);
    });
  }

  getCountForProductCart(sku: string) {
    // Fetch count for the product cart
    this.addToCart.getCountForSkuAndCid(sku, this.cid).subscribe(countResponse => {
      // You can store the count in a different variable if needed
      // For now, it will update the existing 'count' variable
      this.setCount(countResponse);
    });
  }

  onAddButtonClick() {
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[0].sku,
      count: 1
    };
    this.addToCart.addTocart(item);

    // Update the count variable after adding
    this.getCountForProduct(this.products[0].sku);
    window.location.reload();

  }

  onRemoveButtonClick() {
    console.log(localStorage.getItem("userid"), this.products[0].sku);
    const item = {
      cid: localStorage.getItem("userid"),
      sku: this.products[0].sku
    };
    this.addToCart.removeFromcartone(item);

    // Update the count variable after removing
    this.getCountForProduct(this.products[0].sku);
    window.location.reload();

  }
}
