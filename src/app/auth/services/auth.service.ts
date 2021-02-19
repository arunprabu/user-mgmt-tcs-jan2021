import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  signup(signupData: any): Observable<any> {
    console.log(signupData);

    return this.http.post('https://reqres.in/api/signup', signupData)
      .pipe( map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  login(signinData: any): Observable<any>{
    console.log(signinData);

    return this.http.post('https://reqres.in/api/login', signinData)
      .pipe( map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  isAuthenticated(): boolean {
    // is the user really authenticated?
    if(localStorage.getItem('token')){
      return true;
    }else{
      return false;
    }
  }
}
