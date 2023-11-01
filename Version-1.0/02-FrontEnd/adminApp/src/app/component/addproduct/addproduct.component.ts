import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  url:string = "http://localhost:4201/productcontroller/postproduct";

  formData = {
    "sku":'',
    "name":'',
    "description":'',
    "unitPrice":'',
    "imageUrl":'',
    "active":true,
    "unitsInStock":'',
    "category":{'name':''}
  };

  constructor(private dataservice:DataserviceService){}
  OnSubmit(form:NgForm)
  {
    console.log(this.formData)

    this.dataservice.addProduct(this.url,this.formData).subscribe(
      (response) => {
            console.log('Response:', response);
      },
      (error) =>
      {
            console.error('Error:', error);
      }
    )
    
  }
}

// ?sku=AC008&name=rice&description=goodrice&unit_price=234&image_url=newyrl&active=true&units_in_stock=200