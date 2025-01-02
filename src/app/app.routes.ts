import { Routes } from '@angular/router';
import { LandingPageComponent } from './Dashboard/User/Components/landing-page/landing-page.component';
import { ProductDetailComponent } from './Dashboard/User/Components/product-detail/product-detail.component';
import { CategoryPageComponent } from './Dashboard/User/Components/category-page/category-page.component';

export const routes: Routes = [
    {   'path': '',
        redirectTo: 'landing',
        pathMatch: 'full'
    },
   
    // { 'path': 
    //     'user-login', component:,
    // },
        { 
            'path': 'landing', component:LandingPageComponent,
        },
        { 
            'path': 'product-detail', component:ProductDetailComponent,
        },
        { 
            'path': 'category', component:CategoryPageComponent,
        },
];
