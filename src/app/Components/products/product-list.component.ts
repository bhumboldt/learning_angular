import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ProductService } from './product.service';

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
    products: IProduct[];
    constructor(private _productService: ProductService) {
    }

    onNotify(message: string): void {
        this.title = 'Product List: ' + message;
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.products.filter((product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    showImageHandle(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this.products = this._productService.getProducts();
        this.filteredProducts = this.products;
    }
}
