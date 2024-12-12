import { Routes } from '@angular/router';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CreateProductReactiveComponent } from './components/create-reactive-product/create-reactive-product.component';

export const routes: Routes = [ 	
    { path: 'create-product', component: CreateProductComponent },
    { path: 'product-list', component: ProductListComponent },
    { path: 'create-reactive-product', component: CreateProductReactiveComponent},
    { path: '', redirectTo: '/product-list', pathMatch: 'full' }, 
    ];

