import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { REGISTER_URL } from '../shared/constants/urls';
import { RequestResister } from '../shared/models/RequestRegister';
import { ResponseLogin } from '../shared/models/ResponseLogin';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  goRegister(requestResister:RequestResister):Observable<ResponseLogin>{
    return this.http.post<ResponseLogin>(REGISTER_URL, requestResister)
  }
}
