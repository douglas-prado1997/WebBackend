import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3351/users'; 

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  deleteById(id: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
  
    return this.http.delete(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao excluir item:', error);
        return throwError('Erro ao excluir item. Por favor, tente novamente mais tarde.');
      })
    );
  }

  update(id: any, data: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put(url, data).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Erro ao atualizar item:', error);
        return throwError('Erro ao atualizar item. Por favor, tente novamente mais tarde.');
      })
    );
  }
}
