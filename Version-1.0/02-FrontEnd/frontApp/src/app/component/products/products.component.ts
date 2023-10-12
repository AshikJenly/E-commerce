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
  
  isShowing = true;

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

    this.menubarButton();
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

  
  menubarButton()
  {
    console.log("hai")

    const myElement = document.getElementById('p-side-bar-elem');
    const menuIcon = document.getElementById('p-menu-icon');
    

    if (myElement) {

      if(this.isShowing)
      {
          this.isShowing= false;
          myElement.style.left = "-100%"
          menuIcon?.setAttribute('xlink:href', 'https://www.svgrepo.com/show/532195/menu.svg')

          
      }
      else{
          myElement.style.left = "1%"
          menuIcon?.setAttribute('xlink:href', 'https://www.svgrepo.com/show/521564/close.svg')
          this.isShowing = true;
      }
    //   myElement.style.backgroundColor = 'blue';
    //   myElement.style.color = 'white';
      console.log(myElement)
  }
  }

  }
