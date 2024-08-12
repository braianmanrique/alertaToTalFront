import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Obtener el token (por ejemplo, desde el localStorage o algún servicio)
    const token = localStorage.getItem('token'); // o donde sea que almacenes el token
    console.log(token,'eee')
    // Clonar la petición y agregar el token en el encabezado
    const authReq = token ? req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    }) : req;

    // Continuar con la siguiente petición en la cadena
    return next.handle(authReq);
  }
}
