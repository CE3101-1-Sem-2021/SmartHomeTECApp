import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuarioId = '';
  usuarioToken = '';

  constructor() {}

  async getUserData(tokenUser: string) {
    return fetch('http://192.168.0.8:45455/api/Client/' + tokenUser, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'cors',
    });
  }
}
