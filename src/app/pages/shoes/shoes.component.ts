import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss']
})
export class ShoesComponent implements OnInit {

  constructor() { }


  shoes = [
    {
      id : 1,
      name: 'Nike Air Max Zm950 CV6897',
      price: (new Intl.NumberFormat('VN-IN', { maximumSignificantDigits: 3 }).format(5279000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/260516/nike-air-max-zm950-cv6897-nam-thumb-1-2-600x600.jpg',
      inStock: 10,
    },

    {
      id : 2,
      name: 'Nike Air Max 270 React CV8818-102',
      price: (new Intl.NumberFormat('VN', { maximumSignificantDigits: 3 }).format(4409000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/277720/giay-lifestyle-nu-nike-air-max-270-react-cv8818-102-m-thumb-600x600.jpg',
      inStock: 10,
    },

    {
      id : 3,
      name: 'Nike Air Max 90 DX0115-100',
      price: (new Intl.NumberFormat('VN', { maximumSignificantDigits: 3 }).format(3719000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299138/giay-lifestyle-nu-nike-air-max-90-dx0115-100-thumb-600x600.jpg',
      inStock: 10,
    },

    {
      id : 4,
      name: 'Nike Air Max 90 DQ4071-100',
      price: (new Intl.NumberFormat('VN', { maximumSignificantDigits: 3 }).format(3719000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299133/giay-lifestyle-nam-nike-air-max-90-dq4071-100-thumb-600x600.jpg',
      inStock: 10,
    },

    {
      id : 5,
      name: 'Nike Blazer Mid Pro Club DQ7673-100',
      price: (new Intl.NumberFormat('VN', { maximumSignificantDigits: 3 }).format(3419000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299137/giay-lifestyle-nam-nike-blazer-mid-pro-club-dq7673-100-thumb-600x600.jpg',
      inStock: 10,
    },

    {
      id : 6,
      name: 'Nike Wmns Air Max Sc CW4554-111',
      price: (new Intl.NumberFormat('VN', { maximumSignificantDigits: 3 }).format(2319000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/299111/giay-lifestyle-nu-wmns-nike-air-max-sc-cw4554-111-thumb-600x600.jpg',
      inStock: 10,
    },

    {
      id : 7,
      name: 'Nike Blazer Mid 77 DQ4124-104',
      price: (new Intl.NumberFormat('VN', { maximumSignificantDigits: 3 }).format(2929000)) + ' VNĐ',
      description: 'Giày Nike sở hữu công nghệ Air Max độc quyền có phần đệm khí giúp êm chân, phù hợp với những môn thể thao cần hoạt động nhiều',
      photoUrl: 'https://cdn.tgdd.vn/Products/Images/9980/291553/nike-blazer-mid-77-next-nature-dq4124-104-260922-042525-600x600.jpg',
      inStock: 10,
    },

    
  ]

  ngOnInit(): void {
  }

}
