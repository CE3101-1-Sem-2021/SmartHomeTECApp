import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../home/usuario.service';
import { Aposentos } from '../models/aposentos';
import { AposentosService } from './aposentos.service';

@Component({
  selector: 'app-aposentos',
  templateUrl: './aposentos.page.html',
  styleUrls: ['./aposentos.page.scss'],
})
export class AposentosPage implements OnInit {
  aposentos: Aposentos[] = [new Aposentos()];
  constructor(
    private aposentosService: AposentosService,
    public alertController: AlertController,
    public usuarioService: UsuarioService
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
        this.aposentos = JSON.parse(result) as [Aposentos];
        console.log(result);
        this.aposentosService.aposentos = this.aposentos;
      })
      .catch(async (err) => {
        console.log(err);
      });
    //this.aposentos = this.aposentosService.aposentos;
  }

  async rename(aposento: Aposentos) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Renombrar aposento',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            // eslint-disable-next-line max-len
            this.aposentosService
              .renameAposento(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                aposento.name,
                alertData.name2
              )
              .then((response) => {
                //console.log(response.text());
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
          value: aposento.name,
          placeholder: 'Nuevo nombre',
        },
      ],
    });
    await alert.present();
  }

  async delete(aposento: Aposentos) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Desea eliminar el dispositivo?',
      subHeader: 'Esta acción eliminará permanentemente este dispositivo',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            this.aposentosService
              .deleteAposento(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
                aposento.name
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

  async addAposento() {
    const aposento = new Aposentos();
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Nuevo aposento',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            this.aposentosService
              .addAposento(
                this.usuarioService.usuarioToken,
                this.usuarioService.usuarioId,
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
          value: aposento.name,
          placeholder: 'Nombre',
        },
      ],
    });
    await alert.present();
  }
}
