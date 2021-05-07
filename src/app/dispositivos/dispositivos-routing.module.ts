import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Device } from '@capacitor/core';

import { DispositivosPage } from './dispositivos.page';
import { InfoDevicePage } from './info-device/info-device.page';

const routes: Routes = [
  {
    path: '',
    component: DispositivosPage,
  },
  {
    path: ':deviceId',
    component: InfoDevicePage,

    //children: [
    //  {
    //    path: ':info-device',
    //    component: InfoDevicePage,
    //loadChildren: './info-device/info-device.module#InfoDevicePageModule',
    //  },
    //],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispositivosPageRoutingModule {}
