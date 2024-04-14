import { Injectable } from '@angular/core';
import { ResponseLogin } from '../shared/models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginResponse!: ResponseLogin;

  clear() :void {
    //this.loginResponse = undefined;
  }

  isAuthenticated() :boolean {
    return Boolean(this.loginResponse?.jwt);
  }
}
