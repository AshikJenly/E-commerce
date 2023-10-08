import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  baseUrl :string = "http://localhost:4201/api/customers/search/findByEmailAndPassword"
 
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


  getUserByEmailAndPassword(email:string,password:string):any{

    const url = `${this.baseUrl}?email=${email}&password=${password}`
    const data = this.fetchCustomerData(url)

    if(data){
      data.subscribe((response)=>{
        const firstName = response.firstname;
        const lastName = response.lastname;
        
        localStorage.setItem("username",firstName + " " + lastName)
      })
      return true
    }
    else{
      return false
    }
  }
  getuserName():any{
    return localStorage.getItem("username")
  }
  fetchCustomerData(url:string): Observable<any> {
    return this.http.get(url);
  }
}
