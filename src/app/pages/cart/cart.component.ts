import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(protected cartService: CartService, protected router: Router) { }

  navigateToHome(){
    this.router.navigate(['']);
  }

  navigateToBill(){
    this.router.navigate(['bill']);
  }
  

  ngOnInit(): void {
  }

}
