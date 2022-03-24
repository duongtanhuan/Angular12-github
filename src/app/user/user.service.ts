import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user.model';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable()
export class UserService {
    //user: User = new User();
    //user: User =new User(0,"","","");

  constructor(private http:HttpClient) {}

  private userUrl = 'http://localhost:8080/api';
	//private userUrl= '/api';

  public getUsers() {
    return this.http.get<User[]>(this.userUrl);
  }

  public deleteUser(user: User) {
    return this.http.delete(this.userUrl + "/"+ user.id);
  }

  public createUser(user: User) {
    return this.http.post<User>(this.userUrl, user);
  }

}
