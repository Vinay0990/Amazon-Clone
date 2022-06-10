import { Injectable } from '@angular/core';
import { logins } from 'src/assets/logins';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  logins!: User[];
  constructor() {
    this.logins = logins;
  }

  checkPassword(email: string, password: string) {
    const element = logins.find((d) => d.email == email);
    if (password == element?.password) {
      return element;
    }
    return -1;
  }
}
