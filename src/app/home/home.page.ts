import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { LogicServiceService } from '../login/logic-service.service';
import { Usuario } from '../models/usuario';
import { Usuario2 } from '../models/usuario2';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario2: Usuario2 = new Usuario2();

  constructor(
    private menu: MenuController,
    private usuarioService: UsuarioService,
    private loginService: LogicServiceService
  ) {}

  ngOnInit() {
    this.usuarioService
      .getUserData(this.loginService.token)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        this.usuario2 = JSON.parse(result) as Usuario2;
        console.log(this.usuario2);
        this.usuarioService.usuarioId = this.usuario2.id;
        this.usuarioService.usuarioToken = this.loginService.token;
      })
      .catch(async (err) => {
        console.log(err);
      });
  }

  openFirst() {
    this.menu.enable(true, 'first');
    this.menu.open('first');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }
}
