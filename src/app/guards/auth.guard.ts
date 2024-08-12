import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  // const isAuthenticated = authService.validateToken();
  // console.log(isAuthenticated,'isAuthenticated')

  // return authService.validateToken().pipe(

  //   map((isAuthenticated:any) => {
  //     debugger
  //     if(isAuthenticated){
  //       console.log(isAuthenticated,'isAuthenticatedisAuthenticated')
  //     console.log('ok')
  //     return true
  //   } else{
  //     console.log('Acceso denegado');
  //     return false;
  //   }
  //   })
  // )
  return authService.validateToken()
      .pipe(
        tap(isAuthenticated => {
          if(!isAuthenticated){
            router.navigateByUrl('/login')
          }
        })
      )
};
