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
 Users=[{username:"Quynh Giang", street:"Q1,Tp HCM", postcode:"041"},
{username:"Dang Giang", street:"Hieu Le", postcode:"240"}];
 user={username:"", street:"", postcode:""};
 
  ngOnInit(): void {
    
  }
  onSubmit(formValue: any){
    console.log(formValue)
  }
  currentIndex=null;
  save(){
    if(this.currentIndex==null){
      this.Users.push(this.user);
    }else{
      this.Users.splice(this.currentIndex,1,this.user);
    }
    this.huy();
  }
  edit(index: any){
    this.currentIndex=index
    this.user={...this.Users[index]}; 
  }
  huy(){
    this.user={username:"", street:"", postcode:""};
    this.currentIndex=null;
  }
}
