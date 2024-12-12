import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-product.component.html',
  styleUrl: './create-product.component.css'
})
export class CreateProductComponent {
  product: Product;
  router = new Router();
  constructor(private productService: ProductService){
    this.product = new Product('', '', 1);
}

onSubmit(){
  console.log(this.product);
  this.productService.createProduct(this.product);
  this.router.navigate(['/product-list']);
}


}
