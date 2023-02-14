import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.scss']
})
export class TShirtComponent implements OnInit {

  constructor(public cartService: CartService) { }
  

  ngOnInit(): void {
  }

}
