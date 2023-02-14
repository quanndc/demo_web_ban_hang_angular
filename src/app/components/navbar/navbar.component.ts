import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router, public cartService: CartService) { }
  selectedIndex = 0;

  movedToCart  = false;;

  classes = [
    'shoes','t-shirt','pant','accessory','story','store','hire','cart',
  ]
  

  pages = [
    'Giày', 'Áo', 'Quần', 'Phụ kiện', 'Bài viết','Cửa hàng','Tuyển dụng','Giỏ hàng',
  ]

  navigatetoHome(){
    this.movedToCart = false;
    this.router.navigate(['']);
  }

  navigateTo(index: number){
    this.movedToCart = false;
    this.router.navigate([this.classes[index]]);
  }
  
  navigateToCart(){
    this.movedToCart = true;
    this.router.navigate(['cart']);
  }

  onFocus(element: any){
    this.movedToCart = false;
    this.selectedIndex = element;
  }

  ngOnInit(): void {
  }

}
