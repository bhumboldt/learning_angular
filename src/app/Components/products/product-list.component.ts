import { Component } from '@angular/core';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    title = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    listFilter = 'cart';
    products: any[] = [
        {
            'productID': 1,
            'productName': 'Test Product 1',
            'productCode': 'ABCDEFG',
            'description': 'Some Test Product',
            'releaseDate': 'Now',
            'price': 19.99,
            'starRating': 1.5,
            'imageUrl': '../../assets/testimg.jpg'
        },
        {
            'productID': 2,
            'productName': 'Test Product 2',
            'productCode': 'BCDAKKDL',
            'description': 'Another Test Product',
            'releaseDate': 'Never',
            'price': 33.33,
            'starRating': 4.8,
            'imageUrl': '../../assets/testimg.jpg'
        }
    ];

    showImageHandle(): void {
        this.showImage = !this.showImage;
    }
}
