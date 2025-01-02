import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  constructor(){

  }

  catItem = [
    {
      name: 'Men',
    },
    {
      name: 'Women',
    },
    {
      name: 'Child',
    },
    {
      name: 'Company',
    },
  ]

  productRating = [
    {
      name: 'Mark Edwards',
      image: 'assets/imagesr/img1.png',
      rating: '*****',
      title: 'This is the best white        t-shirt out there',
      description: `I've searched my entire life for a t-shirt that reflects every color in the visible spectrum.Scientists said it couldn't be done, but   when I look at this shirt, I see white   light bouncingright back into my eyes. Incredible!`
    },

    {
      name: 'Blaik Reid',
      image: 'assets/imagesr/img2.png',
      rating: '****',
      title: 'Adds the perfect variety to my wardrobe',
      description: `I used to be one of those unbearable minimalists who only wore the same black v-necks
every day. Now, I have expanded my wardrobe with three new crewneck options! Leaving
off one star only because I wish the heather gray was more gray.`
    },
    {
      name: 'Ben Russel',
      image: 'assets/imagesr/img3.png',
      rating: '*****',
      title: 'All good things come in 6-Packs',
      description: `Tasty beverages, strong abs that will never be seen due to aforementioned tasty
beverages, and these Basic Tees!`
    },

  ]
}
