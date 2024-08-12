import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login-interface';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(private http: HttpClient) { }

  validateToken() :Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(`https://alerta-total-back.onrender.com/api/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp:any)=> {
        localStorage.setItem('token', resp.token)

      }),
      map(resp=> true),
      catchError(error => of(false) )
    );
  }






  loginUser(formData: Login){
    return this.http.post(`https://alerta-total-back.onrender.com/api/login/login`, formData)
      .pipe(
        tap((resp :any)=>{
          localStorage.setItem('token', resp.token)
        })
      )
  }
}
