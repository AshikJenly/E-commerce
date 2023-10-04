import { Component } from '@angular/core';
import { ProductCategory } from 'src/app/common/product-category';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent {
  productCategories: ProductCategory[] = [];
  
  constructor(private productService: DataService) { }

  ngOnInit() {
    this.productService.getProductCategories().subscribe(
      data => {
        this.productCategories = data;
       
      }
    );
    console.log(this.productCategories);
  }

  
}
