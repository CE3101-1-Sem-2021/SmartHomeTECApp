import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Usuario } from '../models/usuario';
import { UsuarioService } from './usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: Usuario;

  constructor(
    private menu: MenuController,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.usuario = this.usuarioService.usuario;
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
