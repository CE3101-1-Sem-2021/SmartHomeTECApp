import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Aposentos } from '../models/aposentos';
import { AposentosService } from './aposentos.service';

@Component({
  selector: 'app-aposentos',
  templateUrl: './aposentos.page.html',
  styleUrls: ['./aposentos.page.scss'],
})
export class AposentosPage implements OnInit {
  aposentos: Aposentos[];
  constructor(
    private aposentosService: AposentosService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.aposentos = this.aposentosService.aposentos;
  }

  async rename(aposento: Aposentos) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class2',
      header: 'Renombrar aposento',
      buttons: [
        {
          text: 'Ok',
          handler: (alertData) => {
            aposento.name = alertData.name2;
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

  delete(aposento: Aposentos) {
    const index = this.aposentos.indexOf(aposento, 0);
    if (index > -1) {
      this.aposentos.splice(index, 1);
    }
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
            aposento.name = alertData.name2;
            this.aposentosService.aposentos.push(aposento);
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
