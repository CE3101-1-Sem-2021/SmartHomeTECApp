import { Injectable } from '@angular/core';
import { Device } from '../models/device';

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  deviceByAposento: Device[];
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

  getAllDevices() {
    return [...this.device];
  }

  getDevice(deviceId: string) {
    return {
      ...this.device.find(
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // eslint-disable-next-line arrow-body-style
        (device) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          return device.id === deviceId;
        }
      ),
    };
  }

  getDevicesByAposento(aposento: string) {
    this.deviceByAposento = [];
    return {
      ...this.device.find(
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        // eslint-disable-next-line arrow-body-style
        (device) => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          if (device.aposento === aposento) {
            this.deviceByAposento.push(device);
          }
        }
      ),
    };
  }
}
