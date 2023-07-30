import { Component, Input, OnInit } from '@angular/core';
import { Timestamp } from '@angular/fire/firestore';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  constructor(public cartService: CartService) {
    let test = Timestamp.now().toDate().getTime().toString();
    console.log(test)

  }

  

  ngOnInit(){
    let test2 = Timestamp.now().toDate().getTime().toString();
    console.log(test2)
  }

}
