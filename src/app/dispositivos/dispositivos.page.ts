import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Device } from '../models/device';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {
  device: Device[];
  constructor(
    private dispositivosService: DeviceService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.device = this.dispositivosService.device;
  }

  delete(device: Device) {
    const index = this.device.indexOf(device, 0);
    if (index > -1) {
      this.device.splice(index, 1);
    }
  }

  async rename(device: Device) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Renombrar dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            device.name = alertData.name2;
          },
        },
      ],
      inputs: [
        {
          name: 'name2',
          type: 'text',
          id: 'name2',
          value: device.name,
          placeholder: 'Nuevo nombre',
        },
      ],
    });
    await alert.present();
  }

  async transfer(device: Device) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Transferir dispositivo',
      subHeader: 'Ingrese el correo electrónico del usuario destinatario',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {},
        },
        {
          // eslint-disable-next-line @typescript-eslint/quotes
          text: "Don't transfer",
          handler: (alertData) => {},
        },
      ],
      inputs: [
        {
          name: 'name2',
          type: 'text',
          id: 'name2',
          placeholder: 'this@example.com',
        },
      ],
    });
    await alert.present();
  }

  async addDevice() {
    const device = new Device();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Asociar dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            if (
              alertData.id === '' ||
              alertData.tipo === '' ||
              alertData.descripcion === '' ||
              alertData.consumo === '' ||
              alertData.marca === '' ||
              alertData.aposento === ''
            ) {
            } else {
              device.id = alertData.id;
              device.name = 'Undefined';
              device.type = alertData.tipo;
              device.description = alertData.descripcion;
              device.consumption = alertData.consumo;
              device.brand = alertData.marca;
              device.aposento = alertData.aposento;
              this.dispositivosService.device.push(device);
            }
          },
        },
        {
          // eslint-disable-next-line @typescript-eslint/quotes
          text: 'No asociar',
          handler: (alertData) => {},
        },
      ],
      inputs: [
        {
          name: 'id',
          type: 'text',
          id: 'id',
          placeholder: 'Numero de serie',
        },
        {
          name: 'descripcion',
          type: 'text',
          id: 'descripcion',
          placeholder: 'Descripcion',
        },
        {
          name: 'tipo',
          type: 'text',
          id: 'tipo',
          placeholder: 'Tipo de dispositivo',
        },
        {
          name: 'marca',
          type: 'text',
          id: 'marca',
          placeholder: 'Marca',
        },
        {
          name: 'consumo',
          type: 'text',
          id: 'name2',
          placeholder: 'Numero de serie',
        },
        {
          name: 'aposento',
          type: 'text',
          id: 'aposento',
          placeholder: 'Aposento',
        },
      ],
    });
    await alert.present();
  }
}
