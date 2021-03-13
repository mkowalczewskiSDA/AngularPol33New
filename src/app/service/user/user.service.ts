import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { User } from '../../model/user';

@Injectable()
export class UserService {

  private usersUrl: string;
  private users: Observable<User[]>

  constructor(private http: HttpClient) { 
    this.usersUrl = 'http://localhost:8080/api/users';
  }

  public findAll(): Observable<User[]> {
    console.log("test");
    
    this.users = this.http.get<User[]>(this.usersUrl);
    return this.users
  }

  public create(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }
  
  public delete(id: number) {
    this.http.delete(this.usersUrl+"/"+id).subscribe(() => console.log("user deleted"))
  }

}
