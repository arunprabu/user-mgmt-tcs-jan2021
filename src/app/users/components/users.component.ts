import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent implements OnInit, OnDestroy {

  userList: any[];
  usersSubscription: Subscription;

  constructor( private userService: UserService) {  // 1. connecting to the service class using dep injection
    console.log('Inside Constructor');
  }

  ngOnInit(): void { // lifecycle hook
    console.log('Inside ngOnInit');
    // called when the comp comes into the view
    // ideal place for us to send ajax calls
   
    // 2. send the req to the service 
    this.usersSubscription = this.userService.getUsers()
      .subscribe( (res: any[]) => { // 3. get the resp from service 
        console.log(res);
        this.userList = res;
      });
  }

  ngOnDestroy(): void { // lifecycle hook
    // called when the comp goes out of the view
    // ideal place for us to unsubscribe, clear the data, remove interval, remove timeout, 
    console.log('Inside ngOnDestroy');
    this.usersSubscription.unsubscribe();
    if(this.userList && this.userList.length > 0){
      this.userList.length = 0;
    }
  }

}
