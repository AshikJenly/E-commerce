import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddtocartService {

  cartApiUrl = "http://localhost:4201/api/carts"
  cartController = "http://localhost:4201/cartcontroller"


  constructor(private http:HttpClient) { }

  addTocart(item:any)
  {
      console.log("Posting data ")
      this.postOneItem(item).subscribe( (response) => {
        // Handle the response from the server (e.g., success message)
       
        console.log('Response:', response);
      },
      (error) => {
        // Handle any errors that occur during the POST request
        console.error('Error:', error);
      })
  }
  postOneItem(data: any): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(this.cartApiUrl, data, httpOptions);
  }

        // Cart details
        getCountForSkuAndCid(sku: string, cid: number): Observable<number> {
          return this.http.get<number>(`${this.cartController}/cart/productCount?cid=${cid}&sku=${sku}`);
        }

        getTotal( cid: number): Observable<number> {
          return this.http.get<number>(`${this.cartController}/cart/totalCost?cid=${cid}`);
        }





  // ------------ Removing From Cart -------------------
  removeFromcart(item:any)
  {
      const url = `${this.cartController}/deleteFromCartItem?cid=${item.cid}&sku=${item.sku}`
      return this.deleteOneItem(item,url).subscribe( (response) => {
        // Handle the response from the server (e.g., success message)
       
        console.log('Response:',response);
      },
      (error) => {
        // Handle any errors that occur during the POST request
        console.error('Error:', error);
      })
  }
  deleteOneItem(data: any,url:string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(url,data);
  }
  
  


  deleteOnlyOneItem(data: any,url:string): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post(url,data);
  }
// remove one element from cart
  removeFromcartone(item:any)
  {
      const url = `${this.cartController}/deleteFromCartItemwithlimit?cid=${item.cid}&sku=${item.sku}`
      return this.deleteOneItem(item,url).subscribe( (response) => {
        // Handle the response from the server (e.g., success message)
       
        console.log('Response:',response);
      },
      (error) => {
        // Handle any errors that occur during the POST request
        console.error('Error:', error);
      })
  }
}