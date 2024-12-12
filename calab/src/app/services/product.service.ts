import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

import { JsonPipe } from '@angular/common';
import  DATA from './MOCK_DATA.json';
import { LoggerService } from './logger/logger.service';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
    
})
export class ProductService {
    
    constructor(private logger: LoggerService, private httpClient: HttpClient)  {

      
     }

     getProducts(): Observable<Product[]>{
        this.logger.log('Fetching Products');
        return this.httpClient.get<Product[]>('http://localhost:3001/products');
    }
    

    createProduct(product: Product){
        this.httpClient.post<Product>('http://localhost:3001/products', product).subscribe(res => {
        console.log('Product was created successfully:', res);
        });
    }
    
    
    
}
