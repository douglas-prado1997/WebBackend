import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';
import { LocalStorageService } from './localStorageService';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService,
    
  ) { }

  private apiUrl = 'http://localhost:3351/post'; 
  private token = this.localStorageService.getData('user').token;
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.token}`
  });
  

  create(data: any): Observable<any> {

    return this.http.post(this.apiUrl, data,{ headers: this.headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao criar item:', error);
        return throwError('Erro ao criar item. Por favor, tente novamente mais tarde.');
      })
    );
  }

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  likePost(data: any): Observable<any> {

    return this.http.post(this.apiUrl+'/like', data).pipe(
        
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao criar item:', error);
        return throwError('Erro ao criar item. Por favor, tente novamente mais tarde.');
      })
    );
  }

  commentPost(data: any): Observable<any> {

    return this.http.post(this.apiUrl+'/comment', data).pipe(
        
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao criar item:', error);
        return throwError('Erro ao criar item. Por favor, tente novamente mais tarde.');
      })
    );
  }

  getComment(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/getcomment');
  }
}
