import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ChatRouteGuardService implements CanActivate {

  constructor(private router: Router, public Cookie: CookieService) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    console.log('guard service called');

    if (this.Cookie.get('authtoken') === undefined || this.Cookie.get('authtoken') === '' || this.Cookie.get('authtoken') === null) {
      this.router.navigate(['/']);
      console.log('if statement called');
      return false;
    } else {
      console.log('user verified using guard service');
      return true;
    }
  }
}
