import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LogicServiceService {
  username = 'fabi';
  password = 'fa';

  constructor() {}

  validateCredentials(username: string, password: string) {
    if (this.username === username) {
      if (this.password === password) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }
}
