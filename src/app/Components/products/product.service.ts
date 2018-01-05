import { Injectable } from '@angular/core';
import { IProduct } from './products';

@Injectable()
export class ProductService {
    getProducts(): IProduct[] {
        return [
            {
                'productID': 1,
                'productName': 'Test Product 1',
                'productCode': 'ABC-DEFG',
                'description': 'Some Test Product',
                'releaseDate': 'Now',
                'price': 19.99,
                'starRating': 1.5,
                'imageUrl': '../../assets/testimg.jpg'
            },
            {
                'productID': 2,
                'productName': 'Test Product 2',
                'productCode': 'BCDA-KKDL',
                'description': 'Another Test Product',
                'releaseDate': 'Never',
                'price': 33.33,
                'starRating': 4.8,
                'imageUrl': '../../assets/testimg.jpg'
            }
        ];
    }
}
