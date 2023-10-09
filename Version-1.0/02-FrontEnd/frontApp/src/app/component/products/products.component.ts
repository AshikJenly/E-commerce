import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  
  products: Product[] = []; // Declare a property to store the fetched data
  currentCategoryId:number = 1;
  searchMode: boolean = false;
  previousCategoryId: number =1;
  

  thePageNumber: number = 1;
  thePageSize :number = 10;
  theTotalElements:number = 0;

  constructor(private productService: DataService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(() => {
      this.listProducts();
    });
  }
  listProducts()
  {
    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if (this.searchMode) {
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }

  handleSearchProducts() {

    const theKeyword: string = this.route.snapshot.paramMap.get('keyword')!;

    // now search for the products using keyword
    this.productService.searchProducts(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )
  }
  handleListProducts() {

    // check if "id" parameter is available
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if (hasCategoryId) {
      // get the "id" param string. convert string to a number using the "+" symbol
      this.currentCategoryId = +this.route.snapshot.paramMap.get('id')!;
    }
    else {
      // not category id available ... default to category id 1
      this.currentCategoryId = 1;
    }

    if(this.previousCategoryId != this.currentCategoryId)
    {
      this.thePageNumber = 1;
    }
    this.previousCategoryId = this.currentCategoryId;
    console.log(`currentID=${this.currentCategoryId} PrevID=${this.previousCategoryId}`)
 
    
    this.productService.getProductListPaginate(this.thePageNumber - 1,
      this.thePageSize,
      this.currentCategoryId)
      .subscribe(this.processResult());
  }

  updatePageSize(pageSize: string) {
    this.thePageSize = +pageSize;
    this.thePageNumber = 1;
    this.listProducts();
  }


  processResult() {
    return (data: any) => {
      this.products = data._embedded.product;
      this.thePageNumber = data.page.number + 1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }





  myjavascript()
  {
    const element:any = document.getElementById("closeButton")

    window.addEventListener('resize', function () {
      const windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      const windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    
      if (windowWidth <= 1000) {
      element.style.backgroundColor="blue"
       
        console.log('Small screen detected');
      } else {
       
        console.log('Large screen detected');
      }
    });
    
    // Initial check when the page loads
    window.dispatchEvent(new Event('resize'));
  }

  }
