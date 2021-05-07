import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoDevicePageRoutingModule } from './info-device-routing.module';

import { InfoDevicePage } from './info-device.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoDevicePageRoutingModule
  ],
  declarations: [InfoDevicePage]
})
export class InfoDevicePageModule {}
