import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-t-shirt',
  templateUrl: './t-shirt.component.html',
  styleUrls: ['./t-shirt.component.scss']
})
export class TShirtComponent implements OnInit {

  constructor() { }

  shoes = [
    {
      id : 1,
      name: 'Nike Max 90',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(819000)) + ' VNĐ',
      description: 'Thời trang phang thời tiết, xăm hình mặc đẹp hơn',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/801810e7-93af-412d-88c0-aee43f74f574/max90-all-over-print-basketball-t-shirt-Bg6CnP.png',
      inStock: 20,
    },

    {
      id : 2,
      name: 'Nike Sportswear',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(819000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/242e93bd-ea77-4a72-99ae-ffcadcd15f3d/sportswear-t-shirt-zmMkxS.png',
      inStock: 15,
    },


    {
      id : 3,
      name: 'Nike Dri-FIT Ready',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(1119000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/f85085ee-7edd-44c8-bbe3-a88ed33f8572/dri-fit-ready-short-sleeve-fitness-top-nvkds0.png',
      inStock: 25,
    },


    {
      id : 4,
      name: 'Nike Dri-FIT Hyverse',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(919000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/bb51e0de-73fc-4875-8129-dfc3a137e608/dri-fit-hyverse-short-sleeve-fitness-tank-qjZM1B.png',
      inStock: 10,
    },


    {
      id : 5,
      name: 'Nike Dri-FIT UV Hyverse',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(819000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9730e70e-bf32-4f59-b182-96420e1bcfe9/dri-fit-uv-hyverse-short-sleeve-fitness-top-Ng4LHB.png',
      inStock: 10,
    },


    {
      id : 6,
      name: `Nike 'Just Do It'`,
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(919000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/83155577-e09e-4655-b0f9-5ba434d9fcbf/just-do-it-long-sleeve-t-shirt-gZmbh8.png',
      inStock: 10,
    },


    {
      id : 7,
      name: 'Nike Dri-FIT Fly Standard Issue',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(819000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e545761b-d29e-48a5-ab83-03013d36480c/dri-fit-fly-standard-issue-basketball-hoodie-6jsWFr.png',
      inStock: 10,
    },


    {
      id : 8,
      name: 'Nike Dri-FIT Academy',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(659000)) + ' VNĐ',
      description: 'Wtf is that Bruce Lee???',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/9ed5342f-718a-41ae-a8aa-a927cfd4ffe1/dri-fit-academy-short-sleeve-football-top-Pszp1p.png',
      inStock: 10,
    },


    {
      id : 9,
      name: 'Nike Dri-FIT Victory+',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(1529000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/97b200fa-9d9d-4937-9cc9-9c5435c5bc5c/dri-fit-victory-camo-golf-polo-LVVgm0.png',
      inStock: 10,
    },

    {
      id : 10,
      name: 'Nike Sportswear Air',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(2399000)) + ' VNĐ',
      description: 'Phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/af5d91f0-b7df-4b9f-b77a-9105a9195f80/sportswear-air-woven-over-shirt-top-q314V9.png',
      inStock: 10,
    },

  ]

  ngOnInit(): void {
  }

}
