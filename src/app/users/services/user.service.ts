import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

// Decorator
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // 1. get the form data from comp.ts 
  createUser( userData ){
    console.log(userData);
    // 2. send the data to the rest api 
      // 2.1. What's the REST API?  http://jsonplaceholder.typicode.com/users
      // 2.2. What's the HTTP Method?  POST
      // 2.3. What's the REST API Client? HttpClient
    return this.http.post(this.REST_API_URL, userData)
      .pipe(map( ( res: any) => { // 3. get the resp from the rest api 
        console.log(res);
        // 4. send the resp back to the comp.ts 
        return res;
      }));
  }

}
