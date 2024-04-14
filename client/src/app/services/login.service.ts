import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LOGIN_URL } from '../shared/constants/urls';
import { ResponseLogin } from '../shared/models/ResponseLogin';
import { RequestLogin } from '../shared/models/RequestLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient) { }

  doLogin(requestLogin:RequestLogin):Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(LOGIN_URL, requestLogin)
  }
}
