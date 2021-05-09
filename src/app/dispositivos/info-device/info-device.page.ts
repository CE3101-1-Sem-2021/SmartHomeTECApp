import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/models/device';
import { Dispositivo } from 'src/app/models/dispositivo';
import { DeviceService } from '../device.service';

@Component({
  selector: 'app-info-device',
  templateUrl: './info-device.page.html',
  styleUrls: ['./info-device.page.scss'],
})
export class InfoDevicePage implements OnInit {
  loadedDevice: Dispositivo;

  constructor(
    private activatedRoute: ActivatedRoute,
    private dispositivosService: DeviceService
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
    });
  }
}
