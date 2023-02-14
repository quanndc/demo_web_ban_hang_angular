import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {

  constructor(public cartService: CartService, public router: Router) { }

  confirm(){
    alert("Mua hàng thành công\n" +
    "Cảm ơn bạn đã mua hàng của chúng tôi\n" +
    "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất\n" +
    "Tổng tiền hóa đơn của bạn là: " + (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 2 }).format(this.cartService.total)) + " VNĐ");
  }

  navigateToHome(){
    this.router.navigate(['']);
  }

  ngOnInit(): void {
  }

}
