import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DeviceService } from 'src/app/dispositivos/device.service';
import { Device } from 'src/app/models/device';

@Component({
  selector: 'app-disp-aposento',
  templateUrl: './disp-aposento.page.html',
  styleUrls: ['./disp-aposento.page.scss'],
})
export class DispAposentoPage implements OnInit {
  loadedDevices: Device[];
  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivosService: DeviceService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('disp-aposento')) {
        // dd
        return;
      }
      const aposento = paramMap.get('disp-aposento');
      //console.log('Device' + deviceId);
      this.dispositivosService.getDevicesByAposento(aposento);
      this.loadedDevices = this.dispositivosService.deviceByAposento;
    });
  }
}
