import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AposentosPageRoutingModule } from './aposentos-routing.module';

import { AposentosPage } from './aposentos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AposentosPageRoutingModule
  ],
  declarations: [AposentosPage]
})
export class AposentosPageModule {}
