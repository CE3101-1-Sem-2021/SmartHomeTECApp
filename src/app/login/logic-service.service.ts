import { Injectable } from '@angular/core';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class LogicServiceService {
  token = '';
  email = '';
  constructor() {}

  validateCredentials(usernameFld: string, passwordFld: string) {
    this.email = usernameFld;
    return fetch('http://192.168.0.8:45455/api/Client/Login', {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({
        email: usernameFld, //'dcamachog99@gmail.com',
        password: passwordFld,
      }),
      redirect: 'follow',
      mode: 'cors',
    });
  }
}
