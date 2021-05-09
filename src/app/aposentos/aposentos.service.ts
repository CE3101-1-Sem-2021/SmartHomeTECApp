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

  async getAposentos(tokenUser: string, id: string) {
    return fetch('http://192.168.0.8:45455/api/Room/' + id + '/' + tokenUser, {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
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
