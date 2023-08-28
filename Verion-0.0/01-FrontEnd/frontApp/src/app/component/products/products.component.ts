import { Component } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products: any[] = []; // Declare a property to store the fetched data

  constructor(private productService: DataService) { }

  ngOnInit() {
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data._embedded.product; // Extract the product data
      
    });
  }

}