import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../interfaces/login-interface';
import {catchError, map, tap} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user : any;

  constructor(private http: HttpClient) { }

  validateToken() :Observable<boolean>{
    const token = localStorage.getItem('token') || '';
    return this.http.get(`https://alerta-total-back.onrender.com/api/login/renew`, {
      headers: {
        'x-token': token
      }
    }).pipe(
      tap((resp:any)=> {
        this.user = resp.user
        console.log(this.user,'ee')
        const {
          email,
          name,
          document
        } = resp.user;

          this.user= new User(
            name, email, document, ''
          );

          this.user.showUser();
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
