import { Component, OnInit } from '@angular/core';
import { HammerModule } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/common/product';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit{
 products :Product[]=[]
 constructor(private productService: DataService,private route: ActivatedRoute){}
  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.getsingleproduct();
    });
  }


  getsingleproduct()
  {
    var haskey:boolean = this.route.snapshot.paramMap.has('sku');
    console.log(haskey);
    if(haskey)
    {
    const theKeyword: string = this.route.snapshot.paramMap.get('sku')!;
    console.log(theKeyword);
    this.productService.getSingleProduct(theKeyword).subscribe(
      data => {
        this.products = data;
      }
    )

  }
  }
}
