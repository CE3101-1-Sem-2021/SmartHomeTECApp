import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoDevicePage } from './info-device.page';

const routes: Routes = [
  {
    path: '',
    component: InfoDevicePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoDevicePageRoutingModule {}
