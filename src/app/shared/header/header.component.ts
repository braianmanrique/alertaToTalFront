import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public name = '';
  constructor(private router : Router, private authService: AuthService){
    this.name = authService.user.name;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/login');
  }
}
