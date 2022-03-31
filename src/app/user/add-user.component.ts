import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  
  onSubmit(ngForm:any):void{

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
  huy(){
     this.user.firstName="";
     this.user.lastName="";
     this.user.email="";
  }
}
