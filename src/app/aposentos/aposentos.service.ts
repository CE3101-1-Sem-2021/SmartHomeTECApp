import { Injectable } from '@angular/core';
import { Aposentos } from '../models/aposentos';

@Injectable({
  providedIn: 'root',
})
export class AposentosService {
  aposentos: Aposentos[] = [
    { name: 'Cocina' },
    { name: 'Sala' },
    { name: 'Dormitorio' },
    { name: 'Comedor' },
  ];

  constructor() {}
}
