import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http:HttpClient) { }



  addProduct(url:string,data:any)
  {
    console.log(url,data)
      return this.http.post(`${url}?product=`,data);
  }
}
