import { Injectable } from '@angular/core';
import { IProduct } from './products';
import { HttpClient, HttpErrorResponse } from '@angular/common/http/';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductService {
    private _Url = '../../assets/products.json';
    constructor(private _httpClient: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
        return this._httpClient.get<IProduct[]>(this._Url).catch(this.handleError);
    }

    private handleError(error: HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error.message);
    }
}
