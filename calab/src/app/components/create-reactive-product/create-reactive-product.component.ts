import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators  } from '@angular/forms';

@Component({
  selector: 'app-create-reactive-product',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-reactive-product.component.html',
  styleUrl: './create-reactive-product.component.css'
})
export class CreateProductReactiveComponent {
  
  productForm: FormGroup;
  router = new Router();
  constructor(private productService: ProductService, private formBuilder: FormBuilder){
    this.productForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price:[0]
    });

  
}

onSubmit(){
  this.router.navigate(['/product-list']);
  console.log(this.productForm.value);
  this.productService.createProduct(this.productForm.value);  
  
}




}
