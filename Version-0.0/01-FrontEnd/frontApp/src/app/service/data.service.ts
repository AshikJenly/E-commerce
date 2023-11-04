import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private apiUrl = 'http://localhost:4201/api/products/search/findByCategoryId?id=3';
  private apiUrl = 'http://localhost:4201/api/products';


  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(this.apiUrl);
  }
  
}
