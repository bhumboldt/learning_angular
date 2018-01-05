import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate {

  constructor(private _router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let canRoute = true;
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      alert('Product ID is invalid!');
      this._router.navigate(['/products']);
      canRoute = false;
    }
    return canRoute;
  }
}
