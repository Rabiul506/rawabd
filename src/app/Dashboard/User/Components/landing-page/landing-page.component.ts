import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  category = [
    {
      image: 'assets/imagesr/cat1.png',
      title: 'New Arrival'
    },
    {
      image: 'assets/imagesr/cat2.png',
      title: 'Productivity'
    },
    {
      image: 'assets/imagesr/cat3.png',
      title: 'Workspace'
    },
    {
      image: 'assets/imagesr/cat4.png',
      title: 'Accessories'
    },
    {
      image: 'assets/imagesr/cat5.png',
      title: 'sale'
    },
  ]

  collection = [
    {
      image: 'assets/imagesr/col1.png',
      title: 'Handcrafted Collection',
      para: `Keep your phone, keys, and wallet together, so you can
              lose everything at once.`
    },
    {
      image: 'assets/imagesr/col2.png',
      title: 'Organized Desk Collection',
      para: `The rest of the house will still be a mess, but your desk
              will look great.`
    },
    {
      image: 'assets/imagesr/col3.png',
      title: 'Focus Collection',
      para: `Be more productive than enterprise project managers
            with a single piece of paper.`
    },
  ]
}
