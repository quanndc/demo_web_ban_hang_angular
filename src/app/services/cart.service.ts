import { Injectable, OnInit } from '@angular/core';
import { Item } from '../models/item.model';
import {doc, setDoc, Timestamp, getFirestore} from "firebase/firestore";
// import {  } from '@angular/fire/firestore';
// import {}
@Injectable({
  providedIn: 'root'
})
export class CartService{

  

  // db = getFirestore();
  // shoes2 = doc(this.db, "shoes");

  total = 0;
  cart:Item[] = [];



  addToCart(item:Item){
    if(item.inStock === 0){
      alert("Out of stock");
      return;
    }
    let index = this.cart.findIndex((e) => e.id === item.id);
    if(index === -1){
      item.quantity = 1;
      item.inStock--;
      this.cart.push(item);;
      console.log(this.cart);
      return;
    }else{
      this.cart[index].quantity++;
      item.inStock--;
      console.log(this.cart);
      return;
    }  
  }

  decre(item: Item){
    let index = this.cart.findIndex((e) => e.id === item.id);
    if(index !== -1){
      this.cart[index].quantity--;
      this.cart[index].inStock++;
    }
    if(this.cart[index].quantity === 0){
      this.cart.splice(index, 1);
    }
  }
  
  incre(item:Item){
    let index = this.cart.findIndex((e) => e.id === item.id);
    if(index !== -1){
      this.cart[index].quantity++;
      this.cart[index].inStock--;
    }
  }

  remove(item: Item){
    let index = this.cart.findIndex((e) => e.id === item.id);
    if(index !== -1){
      this.cart[index].inStock += this.cart[index].quantity;
      this.cart.splice(index, 1);
    }
  }


  purchase(){
    let subtotal = 0;
    for (let prdt of this.cart){
      subtotal += (prdt.price*prdt.quantity)
    }
    this.total = subtotal; 
    this.cart = [];
  }

  shoes:Item[] = [
    {
      id:1,
      name: 'Nike Air Max Zm950 CV6897',
      type: "shoes",
      price: 5280000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/260516/nike-air-max-zm950-cv6897-nam-thumb-1-2-600x600.jpg',
      inStock: 100,
      quantity: 0,
    },

    {
      id:2,

      name: 'Nike Air Max 270 React CV8818-102',
      type: "shoes",
      price: 4410000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/277720/giay-lifestyle-nu-nike-air-max-270-react-cv8818-102-m-thumb-600x600.jpg',
      inStock: 10,
      quantity: 0,
    },

    {
      id: 3,
      name: 'Nike Air Max 90 DX0115-100',
      type: "shoes",
      price: 3720000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299138/giay-lifestyle-nu-nike-air-max-90-dx0115-100-thumb-600x600.jpg',
      inStock: 10,
      quantity: 0,
    },

    {
      id : 4,
      name: 'Nike Air Max 90 DQ4071-100',
      type: "shoes",
      price: 3720000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299133/giay-lifestyle-nam-nike-air-max-90-dq4071-100-thumb-600x600.jpg',
      inStock: 10,
      quantity: 0,
    },

    {
      id : 5,
      name: 'Nike Blazer Mid Pro Club DQ7673-100',
      type: "shoes",
      price: 3420000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299137/giay-lifestyle-nam-nike-blazer-mid-pro-club-dq7673-100-thumb-600x600.jpg',
      inStock: 10,
      quantity: 0,
    },

    {
      id : 6,
      name: 'Nike Wmns Air Max Sc CW4554-111',
      type: "shoes",
      price: 5000000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299111/giay-lifestyle-nu-wmns-nike-air-max-sc-cw4554-111-thumb-600x600.jpg',
      inStock: 10,
      quantity: 0,
    },

    {
      id : 7,
      name: 'Nike Blazer Mid 77 DQ4124-104',
      type: "shoes",
      price: 4500000,
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/291553/nike-blazer-mid-77-next-nature-dq4124-104-260922-042525-600x600.jpg',
      inStock: 10,
      quantity: 0
    },
  ]

  tshirt:Item[] = [
    
    {
      id : 8,
      name: 'Nike Max 90',
      price: 1000000,
      type: "tshirt",
      description: 'Thời trang phang thời tiết, xăm hình mặc đẹp hơn',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/801810e7-93af-412d-88c0-aee43f74f574/max90-all-over-print-basketball-t-shirt-Bg6CnP.png',
      inStock: 20,
      quantity: 0
    },

    {
      id : 9,
      name: 'Nike Sportswear',
      price: 1000000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/242e93bd-ea77-4a72-99ae-ffcadcd15f3d/sportswear-t-shirt-zmMkxS.png',
      inStock: 15,
      quantity: 0
    },


    {
      id : 10,
      name: 'Nike Dri-FIT Ready',
      price: 900000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f85085ee-7edd-44c8-bbe3-a88ed33f8572/dri-fit-ready-short-sleeve-fitness-top-nvkds0.png',
      inStock: 25,
      quantity: 0
    },


    {
      id : 11,
      name: 'Nike Dri-FIT Hyverse',
      price: 950000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bb51e0de-73fc-4875-8129-dfc3a137e608/dri-fit-hyverse-short-sleeve-fitness-tank-qjZM1B.png',
      inStock: 10,
      quantity: 0
    },


    {
      id : 12,
      name: 'Nike Dri-FIT UV Hyverse',
      price: 850000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9730e70e-bf32-4f59-b182-96420e1bcfe9/dri-fit-uv-hyverse-short-sleeve-fitness-top-Ng4LHB.png',
      inStock: 10,
      quantity: 0
    },


    {
      id : 13,
      name: `Nike 'Just Do It'`,
      price: 1500000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83155577-e09e-4655-b0f9-5ba434d9fcbf/just-do-it-long-sleeve-t-shirt-gZmbh8.png',
      inStock: 10,
      quantity: 0
    },


    {
      id :14,
      name: 'Nike Dri-FIT Fly Standard Issue',
      price: 819000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e545761b-d29e-48a5-ab83-03013d36480c/dri-fit-fly-standard-issue-basketball-hoodie-6jsWFr.png',
      inStock: 10,
      quantity: 0,
    },


    {
      id : 15,
      name: 'Nike Dri-FIT Academy',
      price: 659000,
      type: "tshirt",
      description: 'Wtf is that Bruce Lee???',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ed5342f-718a-41ae-a8aa-a927cfd4ffe1/dri-fit-academy-short-sleeve-football-top-Pszp1p.png',
      inStock: 10,
      quantity: 0,
    },


    {
      id : 16,
      name: 'Nike Dri-FIT Victory+',
      price: 1529000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/97b200fa-9d9d-4937-9cc9-9c5435c5bc5c/dri-fit-victory-camo-golf-polo-LVVgm0.png',
      inStock: 10,
      quantity: 0,
    },

    {
      id : 17,
      name: 'Nike Sportswear Air',
      price: 2399000,
      type: "tshirt",
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af5d91f0-b7df-4b9f-b77a-9105a9195f80/sportswear-air-woven-over-shirt-top-q314V9.png',
      inStock: 10,
      quantity: 0,
    },
  ]
}
