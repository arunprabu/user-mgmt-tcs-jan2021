import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor( private authService: AuthService , private router: Router) { }

  ngOnInit(): void {
  }

  loginHandler( loginFormData: NgForm): void{
    console.log('Login in progress!');
    console.log(loginFormData.value);

    this.authService.login(loginFormData.value)
      .subscribe( (res: any) => {
        console.log(res);

        localStorage.setItem('token', res.token);
        this.router.navigate(['/']);
      });
  }

}
