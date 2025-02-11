import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:3000/users'; // L'URL de l'API

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`) as Observable<any>;
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user) as Observable<any>;
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${JSON.stringify(id)}`, user) as Observable<any>;
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${JSON.stringify(id)}`) as Observable<any>;
  }
}
