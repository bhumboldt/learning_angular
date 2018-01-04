import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    title = 'Product List';
    products: any[] = [
        {
            'productID': 1,
            'productName': 'Test Product 1',
            'productCode': 'ABCDEFG',
            'description': 'Some Test Product',
            'releaseDate': 'Now',
            'price': 19.99,
            'starRating': 1.5,
            'imageUrl': '#'
        },
        {
            'productID': 2,
            'productName': 'Test Product 2',
            'productCode': 'BCDAKKDL',
            'description': 'Another Test Product',
            'releaseDate': 'Never',
            'price': 33.33,
            'starRating': 4.8,
            'imageUrl': '#'
        }
    ];
}
