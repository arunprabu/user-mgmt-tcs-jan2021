import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: [
  ]
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signUpHandler(signupFormData: NgForm): void {
    console.log('Signup in progress!');
    console.log(signupFormData.value);

    this.authService.signup(signupFormData.value)
      .subscribe((res: any) => {
        console.log(res);
        if (res && res.id) {
          alert('Account Registered Successfully. Redirecting to Login Page...');
          this.router.navigate(['login']);
        }
      });
  }

}
