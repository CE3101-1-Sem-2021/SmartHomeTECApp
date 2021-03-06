import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AposentosService } from '../aposentos/aposentos.service';
import { UsuarioService } from '../home/usuario.service';
import { Aposentos } from '../models/aposentos';
import { Device } from '../models/device';
import { Dispositivo } from '../models/dispositivo';
import { DeviceService } from './device.service';

@Component({
  selector: 'app-dispositivos',
  templateUrl: './dispositivos.page.html',
  styleUrls: ['./dispositivos.page.scss'],
})
export class DispositivosPage implements OnInit {
  public showDetails = false;
  aposentosDisponibles: Aposentos[] = [new Aposentos()];
  device: Device[];
  dispositivos: Dispositivo[] = [new Dispositivo()];
  constructor(
    private dispositivosService: DeviceService,
    public alertController: AlertController,
    public usuarioService: UsuarioService,
    public aposentosService: AposentosService
  ) {}

  ngOnInit() {
    this.aposentosService
      .getAposentos(
        this.usuarioService.usuarioToken,
        this.usuarioService.usuarioId
      )
      .then((response) => {
        //console.log(response.text());
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.aposentosDisponibles = JSON.parse(result) as [Aposentos];
        console.log(result);
      })
      .catch(async (err) => {
        console.log(err);
      });
    this.dispositivosService
      .getDevices(
        this.usuarioService.usuarioToken,
        this.usuarioService.usuarioId
      )
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.dispositivos = JSON.parse(result) as [Dispositivo];
        console.log(this.dispositivos);
        this.dispositivosService.dispositivos = this.dispositivos;
      })
      .catch(async (err) => {
        console.log(err);
      });
  }

  async delete(device: Dispositivo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Desea eliminar el dispositivo?',
      subHeader: 'Esta acci??n eliminar?? permanentemente este dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            this.dispositivosService
              .deleteDevice(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                device.serialNo
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
        {
          // eslint-disable-next-line @typescript-eslint/quotes
          text: 'No eliminar',
          handler: (alertData) => {},
        },
      ],
    });
    await alert.present();
  }

  async rename(device: Dispositivo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Renombrar dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            device.name = alertData.name2;
            // eslint-disable-next-line max-len
            this.dispositivosService
              .renameDevice(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                device.serialNo,
                device.roomName,
                alertData.name2
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

  async changeAposento(device: Dispositivo, newAposento: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Cambiando aposento de ' + device.roomName + ' a ' + newAposento,
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            // eslint-disable-next-line max-len
            this.dispositivosService
              .renameDevice(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                device.serialNo,
                newAposento,
                device.name
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

  async transfer(device: Dispositivo) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Transferir dispositivo',
      subHeader: 'Ingrese el correo electr??nico del usuario destinatario',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            this.dispositivosService
              .transferDevice(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                alertData.name2,
                device.serialNo
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
              // eslint-disable-next-line max-len
              this.dispositivosService
                .asociarDispositivo(
                  this.usuarioService.usuarioToken,
                  this.usuarioService.usuarioId,
                  alertData.id,
                  alertData.aposento,
                  alertData.tipo,
                  alertData.marca,
                  alertData.consumo,
                  alertData.name
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
          name: 'name',
          type: 'text',
          id: 'name',
          placeholder: 'Nombre',
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
          id: 'consumo',
          placeholder: 'Consumo',
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
  toggleDetails() {
    this.showDetails = !this.showDetails;
  }
}
