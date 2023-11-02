import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }


  getAllCategoryNames()
  {
    return this.http.get("http://localhost:4201/productcontroller/getcategorynames");
  }
  addProduct(url:string,data:any)
  {
    console.log(url,data)
      return this.http.post(`${url}?product=`,data);
  }

  getproducttoupdate(name:any)
  {
    return this.http.get(`http://localhost:4201/api/products/search/findByName?name=${name}`)
  }
}
