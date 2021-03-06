import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent implements OnInit {

  isUpdated = false;
  userData: any;
  dupUserData: any;

  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    // read URL Param in angular 8
    const userId = this.route.snapshot.paramMap.get('id');
    this.userService.getUserById(userId)
      .subscribe((res: any) => {
        console.log(res);
        this.userData = res;
      });
  }

  onEditModalOpen(): void {
    this.dupUserData = { ...this.userData };
  }

  async updateUserHandler(formState): Promise<void> {
    console.log(formState);
    console.log(this.dupUserData);

    const status = await this.userService.updateUser(this.dupUserData);
    console.log(status);

    if (status && status.id) {
      this.isUpdated = true;
      this.userData = status;
    }
  }
}
