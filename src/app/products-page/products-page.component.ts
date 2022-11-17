import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  public isMobile = false;
  public title: string = 'Products Listing';
  public productsList: any = [
    {
      productName: "Samsung A8",
      price: "8999",
      productImage: ""
    },
    {
      productName: "Realme x34",
      price: "77223",
      productImage: ""
    },
    {
      productName: "LG h7",
      price: "8999",
      productImage: ""
    },
    {
      productName: "Nokia F8",
      price: "88993",
      productImage: ""
    }
  ]
  constructor() { 
    console.log("This is constructor");
  }

  ngOnInit(): void {
    console.log("This is ngOnInit");
  }

  toggle(){
    this.isMobile = !this.isMobile
  }
}
