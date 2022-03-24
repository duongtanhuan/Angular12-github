import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../models/user.model';
import { UserService } from './user.service';

@Component({
  templateUrl: './add-user.component.html'
})
export class AddUserComponent {
  
  user: User =new User(0,"","","");

  constructor(private router: Router, private userService: UserService) {

  }
  ngOnInit(): void {
     console.log("HHHHHHHHHHHHH");
  };
  createUser(): void {
    this.userService.createUser(this.user)
        .subscribe( data => {
          alert("User created successfully.");
        });

  };

}
