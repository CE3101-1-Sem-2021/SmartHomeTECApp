import { Injectable } from '@angular/core';
import { Device } from '../models/device';
import { Dispositivo } from '../models/dispositivo';

const myHeaders = new Headers();
myHeaders.append('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  deviceByAposento: Dispositivo[] = [new Dispositivo()];
  dispositivos: Dispositivo[] = [new Dispositivo()];
  device: Device[] = [
    {
      name: 'Samsung 10',
      type: 'phone',
      brand: 'Samsung',
      id: '89809',
      consumption: '78kW',
      aposento: 'Cocina',
      description:
        'An incredible phone with awesome capabilities added in the verion 10, this is the next generation in phones',
    },
    {
      name: 'Samsung 11',
      type: 'phone',
      brand: 'Samsung',
      id: '89810',
      consumption: '78kW',
      aposento: 'Sala',
      description:
        'An incredible phone with awesome capabilities added in the verion 10, this is the next generation in phones',
    },
    {
      name: 'Samsung 12',
      type: 'phone',
      brand: 'Samsung',
      id: '89811',
      consumption: '78kW',
      aposento: 'Sala',
      description:
        'An incredible phone with awesome capabilities added in the verion 10, this is the next generation in phones',
    },
    {
      name: 'Samsung 14',
      type: 'phone',
      brand: 'Samsung',
      id: '89812',
      consumption: '78kW',
      aposento: 'Sala',
      description:
        'An incredible phone with awesome capabilities added in the verion 10, this is the next generation in phones',
    },
  ];

  constructor() {}

  async turnOnDispositivo(tokenUser: string, idUser: string, deviceID: string) {
    return fetch(
      'http://192.168.0.8:45455/api/Device/SwitchState/turnOn/' + deviceID,
      {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify({
          id: idUser,
          token: tokenUser,
        }),
        mode: 'cors',
      }
    );
  }

  async turnOffDispositivo(
    tokenUser: string,
    idUser: string,
    deviceID: string
  ) {
    return fetch(
      'http://192.168.0.8:45455/api/Device/SwitchState/turnOff/' + deviceID,
      {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify({
          id: idUser,
          token: tokenUser,
        }),
        mode: 'cors',
      }
    );
  }

  async getDevices(tokenUser: string, id: string) {
    return fetch(
      'http://192.168.0.8:45455/api/Device/' + id + '/' + tokenUser,
      {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
        mode: 'cors',
      }
    );
  }

  async deleteDevice(tokenUser: string, idUser: string, deviceID: string) {
    return fetch('http://192.168.0.8:45455/api/Device/Client/' + deviceID, {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify({
        id: idUser,
        token: tokenUser,
      }),
      mode: 'cors',
    });
  }

  async asociarDispositivo(
    tokenUser: string,
    id: string,
    deviceID: string,
    aposento: string,
    typeDev: string,
    brandDev: string,
    consumptionDev: string,
    nameDev: string
  ) {
    return fetch('http://192.168.0.8:45455/api/Device/Affiliate/' + id, {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify({
        type: typeDev,
        name: nameDev,
        brand: brandDev,
        serialNo: deviceID,
        consumption: consumptionDev,
        roomName: aposento,
        token: tokenUser,
      }),
      mode: 'cors',
    });
  }

  async renameDevice(
    tokenUser: string,
    id: string,
    deviceID: string,
    aposento: string,
    newName: string
  ) {
    return fetch(
      'http://192.168.0.8:45455/api/Device/Client/' + deviceID + '/' + id,
      {
        method: 'PUT',
        headers: myHeaders,
        redirect: 'follow',
        body: JSON.stringify({
          name: newName,
          roomName: aposento,
          token: tokenUser,
        }),
        mode: 'cors',
      }
    );
  }

  async transferDevice(
    tokenUser: string,
    idUser: string,
    newUserEmail: string,
    deviceID: string
  ) {
    return fetch('http://192.168.0.8:45455/api/Device/Transfer/' + deviceID, {
      method: 'PUT',
      headers: myHeaders,
      redirect: 'follow',
      body: JSON.stringify({
        id: idUser,
        token: tokenUser,
        email: newUserEmail,
      }),
      mode: 'cors',
    });
  }

  getAllDevices() {
    return [...this.device];
  }

  getDevice(deviceId: string) {
    return {
      ...this.dispositivos.find(
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // eslint-disable-next-line arrow-body-style
        (device) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          return device.serialNo === deviceId;
        }
      ),
    };
  }

  getDevicesByAposento(aposento: string) {
    this.deviceByAposento = [];
    return {
      ...this.dispositivos.find(
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // eslint-disable-next-line arrow-body-style
        (device) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          if (device.roomName === aposento) {
            this.deviceByAposento.push(device);
          }
        }
      ),
    };
  }
}
