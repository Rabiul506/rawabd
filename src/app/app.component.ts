import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LandingPageComponent } from './Dashboard/User/Components/landing-page/landing-page.component';
import { CategoryPageComponent } from './Dashboard/User/Components/category-page/category-page.component';
import { ProductDetailComponent } from './Dashboard/User/Components/product-detail/product-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LandingPageComponent,CategoryPageComponent, ProductDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'rawa-bd';
}
