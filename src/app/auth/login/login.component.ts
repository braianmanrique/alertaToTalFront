import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/interfaces/login-interface';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  // admi@gmail.com
  public login: FormGroup | any = this.fb.group({
    email: [ localStorage.getItem('email') || 'admi@gmail.com', [Validators.required, Validators.email]],
    password: ['admin#*.tp', Validators.required],
    remember: [false]
  });
  constructor(private loginService: AuthService, private _router: Router, private fb: FormBuilder){

  }

  ngOnInit():void{
   
  }

  loginData(){
    console.log(this.login.value)
    this.loginService.loginUser(this.login.value).subscribe(resp =>{
      console.log(resp);
      if(this.login.get('remember').value) {
        localStorage.setItem('email', this.login.get('email').value)

      }else{
        localStorage.removeItem('email');
      }
    this._router.navigateByUrl('/home');

    }, (err) =>{
      console.log(err)
    })


  }
}
