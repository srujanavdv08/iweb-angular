import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { RestApiService } from '../services/rest-api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(public router: Router, public apiService: RestApiService) {}
  canActivate(): boolean {
    const token = localStorage.getItem('token');

    const isLoggedIn = token && token != null && token.length > 0 ? true : false;
    if (isLoggedIn) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
