import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/home/usuario.service';
import { Device } from 'src/app/models/device';
import { Dispositivo } from 'src/app/models/dispositivo';
import { DeviceService } from '../device.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-info-device',
  templateUrl: './info-device.page.html',
  styleUrls: ['./info-device.page.scss'],
})
export class InfoDevicePage implements OnInit {
  loadedDevice: Dispositivo;
  deviceWarranty: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivosService: DeviceService,
    public usuarioService: UsuarioService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('deviceId')) {
        // dd
        return;
      }
      const deviceId = paramMap.get('deviceId');
      //console.log('Device' + deviceId);
      this.loadedDevice = this.dispositivosService.getDevice(deviceId);
      this.dispositivosService
        .getWarranty(this.loadedDevice.serialNo)
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw response.text();
          }
          return response.text();
        })
        .then((result) => {
          this.deviceWarranty = result;
          console.log(result);
        })
        .catch(async (err) => {
          console.log(err);
        });
    });
  }

  async turnOn() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Dispositivo encendido',
      subHeader: 'Esta acción encenderá este dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            this.dispositivosService
              .turnOnDispositivo(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                this.loadedDevice.serialNo
              )
              .then((response) => {
                console.log(response);
                if (!response.ok) {
                  throw response.text();
                }
                return response.text();
              })
              .then((result) => {
                console.log(result);
              })
              .catch(async (err) => {
                console.log(err);
              });
          },
        },
      ],
    });
    await alert.present();
  }

  async turnOff() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Dispositivo apagado',
      subHeader: 'Esta acción apagará este dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            this.dispositivosService
              .turnOffDispositivo(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                this.loadedDevice.serialNo
              )
              .then((response) => {
                console.log(response);
                if (!response.ok) {
                  throw response.text();
                }
                return response.text();
              })
              .then((result) => {
                console.log(result);
              })
              .catch(async (err) => {
                console.log(err);
              });
          },
        },
      ],
    });
    await alert.present();
  }
}
