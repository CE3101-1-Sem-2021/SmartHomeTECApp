import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/dispositivos/device.service';
import { UsuarioService } from 'src/app/home/usuario.service';
import { Device } from 'src/app/models/device';
import { Dispositivo } from 'src/app/models/dispositivo';
import { AposentosService } from '../aposentos.service';

@Component({
  selector: 'app-disp-aposento',
  templateUrl: './disp-aposento.page.html',
  styleUrls: ['./disp-aposento.page.scss'],
})
export class DispAposentoPage implements OnInit {
  loadedDevices: Dispositivo[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivosService: DeviceService,
    public aposentosService: AposentosService,
    public usuarioService: UsuarioService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('disp-aposento')) {
        // dd
        return;
      }
      const aposento = paramMap.get('disp-aposento');
      //console.log('Device' + deviceId);
      this.aposentosService
        .getDevicePerRoom(
          this.usuarioService.usuarioToken,
          this.usuarioService.usuarioId,
          aposento
        )
        .then((response) => {
          //console.log(response.text());
          if (!response.ok) {
            throw new Error(response.toString());
          }
          return response.text();
        })
        .then((result) => {
          this.loadedDevices = JSON.parse(result) as [Dispositivo];
          console.log(result);
        })
        .catch(async (err) => {
          console.log(err);
        });
      //console.log('Devices: ' + this.loadedDevices);
    });
  }
}
