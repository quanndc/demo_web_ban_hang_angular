import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }
  classes = [
    'shoes','t-shirt','pant','accessory','story','store','hire'
  ]
  
  selectedIndex = 0;

  pages = [
    'Giày', 'Áo', 'Quần', 'Phụ kiện', 'Bài viết','Cửa hàng','Tuyển dụng'
  ]

  navigateTo(index: number){
    this.router.navigate([this.classes[index]]);
  }
  
  onFocus(element: any){
    this.selectedIndex = element;
  }

  ngOnInit(): void {
  }

}
