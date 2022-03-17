import { Component, OnInit } from '@angular/core';
//import { User } from './user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  //user!: User;
  constructor() { }
 User=[{name_input:"hi", street_input:"e3", post_code:"20"}];
 user={name_input:"", street_input:"", post_code:""}
  ngOnInit(): void {
   //this.user = new User('Default Username', 'Universe', 'XXXX'); //#khởi tạo user
  }
  onSubmit(formValue: any){
    console.log(formValue)
  }
}
