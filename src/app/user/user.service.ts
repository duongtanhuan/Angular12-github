import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
  getPilotReports(params: any) {
    throw new Error('Method not implemented.');
  }
    //user: User = new User();
    //user: User =new User(0,"","","");

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/api';
	//private path= '/report';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }
  // public getPdftUsers() {
  //   return this.http.get<User[]>(this.userUrl +"/pdf");
  // }
  // public getExcelData(){
  //   return this.http.get<User[]>(this.userUrl+"excel");
  // }
  public download(file: string | undefined): Observable<Blob> {
    return this.http.get(`${this.userUrl+"/report"}/${file}`, {
      responseType: 'blob'
    });
  }
}
