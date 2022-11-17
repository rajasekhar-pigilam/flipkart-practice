import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-summary-page',
  templateUrl: './cart-summary-page.component.html',
  styleUrls: ['./cart-summary-page.component.css']
})
export class CartSummaryPageComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onButtonClick(){
    this.router.navigate(['/home']);
  }
}
