import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: User[]=[];
  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe( data => {
      this.users = data;
    });
  };
 
  deleteUser(user: User): void {
    this.userService.deleteUser(user)
      .subscribe( data => {
        this.users = this.users.filter(u => u !== user);
      })
  };
  downloadFilePdf(filename: string): void {
    this.userService
      .download(filename)
      .subscribe(blob =>{
        if(blob){
          this.downLoadFile1(blob, 'pdf', filename);
        }
      }) ;
  }
  downloadFileExcel(filename: string): void {
    this.userService
      .download(filename)
      .subscribe(blob => this.downLoadFile1(blob, 'xlsx', filename));
  }

  downLoadFile1(data: any, type: string, fileName: string) {
    const date = new Date();
    const blob = new Blob([data], {type: this.createFileType(type)});
    const a = document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = fileName;
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
  }

  createFileType(e: string) {
    let fileType = '';
    if (e === 'pdf') {
      fileType = `application/${e}`;
    } else if (e === 'docx') {
      fileType = 'application/msword';
    } else if (e === 'xlsx') {
      fileType = 'application/vnd.ms-excel';
    } else if (e === 'zip') {
      fileType = 'application/zip';
    }

    return fileType;
  }
}


 

