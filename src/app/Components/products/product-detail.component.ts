import { Component, OnInit } from '@angular/core';
import { IProduct } from './products';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle = 'Product Detail ';
  product: IProduct;

  constructor(private _route: ActivatedRoute, private _router: Router) {  }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += ': ' + id;
    this.product = {
      'productID': id,
      'productName': 'rake',
      'productCode': 'abcd edf',
      'releaseDate': 'now',
      'description': 'some description',
      'price': 20.99,
      'starRating': 3.9,
      'imageUrl': '#'
    };
  }

  onBackButtonClicked(): void {
    this._router.navigate(['/products']);
  }

}
