import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';
import  DATA from './MOCK_DATA.json';
import { LoggerService } from './logger/logger.service';

@Injectable({
    providedIn: 'root'
    
})
export class ProductService {
    constructor(private logger: LoggerService) { }

    getProducts(){
      this.logger.log('Fetching Products');
        return DATA;
    }
}
