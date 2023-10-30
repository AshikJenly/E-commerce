import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  baseUrl :string = "http://localhost:4201/api/adminusers/search/findByEmailAndPassword"
 
  constructor(private http:HttpClient) { }
  setData(key: string, value:string): void {
    localStorage.setItem(key, value);
    console.log("Service values ",key,value)
  }
  getData(key: string):any {
    const storedValue = localStorage.getItem(key);
    console.log("Servive values ",storedValue)
    return storedValue
  }
  removeData(key: string): void {
    localStorage.removeItem(key);
  }


  getUserByEmailAndPassword(email: string, password: string): Promise<boolean> {
    const url = `${this.baseUrl}?email=${email}&password=${password}`;
  
    return new Promise<boolean>((resolve, reject) => {
      this.fetchCustomerData(url).subscribe(
        (response) => {

          localStorage.setItem("username",response.firstname+" "+response.lastname)
          localStorage.setItem("userid",response.cid)
          resolve(true);
        },
        (error) => {
          
          resolve(false);
        }
      );
    });
  }
  
  getuserName():any{
    return localStorage.getItem("username")
  }
  fetchCustomerData(url:string): Observable<any> {

    try{

      return this.http.get(url);
    }
    catch(error)
    {
      const x =JSON.parse(`'a':'jenly'`)
      return x;
    }
  }
}
