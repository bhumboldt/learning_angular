import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';

@Component({
    selector: 'app-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    title = 'Product List';
    imageWidth = 50;
    imageMargin = 2;
    showImage = false;
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filteredProducts: IProduct[];
    products: IProduct[] = [
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

    constructor() {
        this.filteredProducts = this.products;
        this.listFilter = 'test';
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    showImageHandle(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('Implemented');
    }
}
