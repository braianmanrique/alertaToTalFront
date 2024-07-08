import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  login: FormGroup | any;
  constructor(private _http: HttpClient, private _router: Router){

  }

  ngOnInit():void{
    this.login = new FormGroup({
      'user': new FormControl(),
      'password': new FormControl()
    })
  }

  loginData(login:FormGroup){
    console.log(login.value)
    this._http.get<any>("http://localhost:3000/singup")
      .subscribe(res=>{
        
        const user = res.find((a : any) => {
          
          return a.fname === this.login.value.user && a.password === this.login.value.password;
        });
        console.log(user,'epa')
        if(user){
          alert('you are into');
          this.login.reset();
          this._router.navigate(['dashboard']);
        }else{
          alert('error');
          this._router.navigate(['login']);
        }
      }, err =>{
        alert('Error algo fallo')
      })

  }
}
