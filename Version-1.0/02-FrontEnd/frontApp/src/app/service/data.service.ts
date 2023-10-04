import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../common/product';
import { ProductCategory } from '../common/product-category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:4201/api/products';
  private categoryUrl = 'http://localhost:4201/api/product-category';


  constructor(private httpClient: HttpClient) { }

  // Pagination function for products
  getProductListPaginate(thePage: number,
                        thePageSize: number, 
                        theCategoryId: number): Observable<GetResponseProducts> {

        // need to build URL based on category id, page and size 
          const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                     + `&page=${thePage}&size=${thePageSize}`;

          return this.httpClient.get<GetResponseProducts>(searchUrl);
          }

  getProductList(theCategoryId: number): Observable<Product[]> {

    // need to build URL based on category id 
        const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

        return this.getProducts(searchUrl);
  }
  getSingleProduct(theKeyword: string): Observable<Product[]> {

    // need to build URL based on the keyword 
    const searchUrl = `${this.baseUrl}/search/findBysku?sku=${theKeyword}`;
console.log(this.getProducts(searchUrl));
    return this.getProducts(searchUrl);
  }

  
  searchProducts(theKeyword: string): Observable<Product[]> {

    // need to build URL based on the keyword 
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }


  private getProducts(searchUrl: string): Observable<Product[]> {
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.product));
  }

  getProductCategories(): Observable<ProductCategory[]> {

    return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.productCategory)
    );
  }
 
  }
  
  interface GetResponseProducts {
    _embedded: {
      product: Product[];
    }
    page: {
      size: number,
      totalElements: number,
      totalPages: number,
      number: number
    }
  }

  interface GetResponseProductCategory {
    _embedded: {
      productCategory: ProductCategory[];
    }
  }
