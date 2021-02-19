import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

// Decorator
@Injectable({
  providedIn: 'root'  // enables the service to be singleton 
})
export class UserService {

  private REST_API_URL = 'http://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // 1. get the form data from comp.ts 
  createUser(userData) {
    console.log(userData);
    // 2. send the data to the rest api 
    // 2.1. What's the REST API?  http://jsonplaceholder.typicode.com/users
    // 2.2. What's the HTTP Method?  POST
    // 2.3. What's the REST API Client? HttpClient
    return this.http.post(this.REST_API_URL, userData)
      .pipe(map((res: any) => { // 3. get the resp from the rest api 
        console.log(res);
        // 4. send the resp back to the comp.ts 
        return res;
      }));
  }

  getUsers() { // 1. get the req from the comp 
    console.log('Before Sending GET Request');
    // 2. send the req to rest api 
    // 2.1. What's the REST API URL? 
    // 2.2. What's the HTTP Method? GET 
    // 2.3. What's the tool? HttpClient 
    return this.http.get(this.REST_API_URL)
      .pipe(map((res: any[]) => { // 3. get the resp from rest api 
        console.log(res);
        // filter, sort, remove, add, convert
        return res; // 4. send the resp to the comp 
      }));
  }

  getUserById(userId){
    console.log(userId);
    let GET_USER_REST_API = `${this.REST_API_URL}/${userId}`;
    return this.http.get(GET_USER_REST_API)
      .pipe( map( (res: any) => {
        console.log(res);
        return res;
      }));
  }

  updateUser(updatableUserData){
    console.log(updatableUserData);
    let UPDATE_USER_REST_API = `${this.REST_API_URL}/${updatableUserData.id}`; 
    
    // Using Promise
    return this.http.put(UPDATE_USER_REST_API, updatableUserData)
      .toPromise()
      .then( (res: any) => {
        console.log(res);
        return res;
      })
      .catch( (err) => {
        console.log(err);
        return err;
      })
      .finally( () => {
        console.log('It is over!');
      });
  }

}
