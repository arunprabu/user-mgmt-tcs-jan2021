import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styles: [
  ]
})
export class AddUsersComponent implements OnInit {

  // Step 1: Create Form tag equivalent in TS 
  addUserForm: FormGroup;

  isSaved = false;

  constructor( private userService: UserService ) { // 1. connect with the service using Dep Injection

  }

  ngOnInit(): void { 
    // Step 1 Continues...
    this.addUserForm = new FormGroup({
      // Step 2: Having Form Element Equivalent in TS - // For Step 3: Refer HTML
      name: new FormControl('arun', Validators.required),  // Step 5: work on validations
      phone: new FormControl('232333333', Validators.required),
      email: new FormControl('a@b.com', [ Validators.required, Validators.email ])
    });
  }

  handleAddUserFormSubmit(){
    console.log(this.addUserForm.value);

    // 2. send the above form data to the service 
    this.userService.createUser(this.addUserForm.value)
      .subscribe( (res: any) => {  // 3. get the resp from the service 
        console.log(res);
        if(res && res.id){
          this.isSaved = true;
        }
      });
   
  }

}
