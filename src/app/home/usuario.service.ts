import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  usuario: Usuario = {
    name: 'Fabian',
    lName: 'Crawford',
    email: 'fabian152195@gmail.com',
    password: '',
    region: {
      contient: 'America',
      country: 'Costa Rica',
    },
    deliveryAddress: [
      {
        province: 'Limón',
        district: 'Guácimo',
        detail: '100 mts Colono Construcción',
      },
    ],
  };

  constructor() {}
}
