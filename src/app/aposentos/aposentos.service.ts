import { Injectable } from '@angular/core';
import { Aposentos } from '../models/aposentos';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class AposentosService {
  aposentos: Aposentos[] = [new Aposentos()];

  constructor() {}

  async deleteAposento(tokenUser: string, idUser: string, aposento: string) {
    return fetch('http://192.168.0.8:45455/api/Room/' + aposento, {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify({
        token: tokenUser,
        id: idUser,
      }),
      mode: 'cors',
    });
  }

  async addAposento(tokenUser: string, idUser: string, aposento: string) {
    return fetch('http://192.168.0.8:45455/api/Room/', {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify({
        name: aposento,
        token: tokenUser,
        clientId: idUser,
      }),
      mode: 'cors',
    });
  }

  async getAposentos(tokenUser: string, id: string) {
    return fetch('http://192.168.0.8:45455/api/Room/' + id + '/' + tokenUser, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
      mode: 'cors',
    });
  }

  async renameAposento(
    tokenUser: string,
    id: string,
    aposento: string,
    newName: string
  ) {
    return fetch('http://192.168.0.8:45455/api/Room/' + id + '/' + aposento, {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify({
        name: newName,
        token: tokenUser,
      }),
      mode: 'cors',
    });
  }

  async getDevicePerRoom(tokenUser: string, id: string, aposento: string) {
    return fetch(
      'http://192.168.0.8:45455/api/Device/DevRoom/' +
        aposento +
        '/' +
        id +
        '/' +
        tokenUser,
      {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode: 'cors',
      }
    );
  }
}
