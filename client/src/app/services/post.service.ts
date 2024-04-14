import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError,  } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3351/post'; 

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  create(data: any): Observable<any> {

    return this.http.post(this.apiUrl, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao criar item:', error);
        return throwError('Erro ao criar item. Por favor, tente novamente mais tarde.');
      })
    );
  }
}
