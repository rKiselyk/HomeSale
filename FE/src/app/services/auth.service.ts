import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  authUser(user: any) {
    let users = [];

    if (localStorage.getItem("Users")) {
      users = JSON.parse(localStorage.getItem("Users"))
    }

    return users.find((u: User) => u.name == user.userName && u.password === user.password)
  }

}
