import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import {  Router } from '@angular/router';
import { DataserviceService } from 'src/app/service/dataservice.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent {

  url:string = "http://localhost:4201/productcontroller/postproduct";
  allcategorynames:any;
  errormessage :any= '';
  altcname = '';
  isError = false;
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

  formPlaceholder={
    "name":'',
    "description":'',
    "unitPrice":'',
    "imageUrl":'',
    "active":true,
    "unitsInStock":'',
    "category":{'name':''}
  }
  
  constructor(private dataservice:DataserviceService,private route:Router){}
  ngOnInit()
  {
    this.dataservice.getAllCategoryNames().subscribe(
      (response)=>{
        this.allcategorynames = response;
      },
      (error)=>{

      }
    )
  }
  OnSubmit(form:NgForm)
  {
    if(this.altcname != '')
    {
      this.formData.category.name = this.altcname;
    }
    if(this.validateForm(form))
    {
      this.dataservice.addProduct(this.url, this.formData).subscribe(
        (response) => {
           
        },
        (error) => {
          console.error('Error:', error);
        }
      );
      this.formData = {
        "sku":'',
        "name":'',
        "description":'',
        "unitPrice":'',
        "imageUrl":'',
        "active":true,
        "unitsInStock":'',
        "category":{'name':''}
      };
    }
    else{

    }
    console.log(this.errormessage);
    
  }

  private handleSuccess(response: any) {
    this.errormessage = response;
    this.isError = false;
  }
  
  private handleError(error: any) {
    this.errormessage = error
    this.isError = true;
  }
  validateForm(form:any):boolean
  {
    if(this.formData.name == '' ||
     this.formData.unitPrice == '' || 
     this.formData.unitsInStock == '' ||
     this.formData.description == '' || 
     this.formData.category.name == '' 
     ){
      this.handleError("Missing Required Field")
      return false;
     }
     this.handleSuccess("Successfully Added")
    return true;
  }
  handleFileInput(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.formData.imageUrl = file.name;
    } else {
      this.formData.imageUrl = '';
    }
  }
}
