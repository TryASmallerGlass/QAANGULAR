import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductComponent, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  constructor(private productService: ProductService, private cartService: CartService) {}


  products$!: Observable<Product[]>;

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
}


  addToCart(product: Product) {
    this.cartService.addToCart(product);
}



}
