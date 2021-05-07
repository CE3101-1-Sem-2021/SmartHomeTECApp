import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DispAposentoPageRoutingModule } from './disp-aposento-routing.module';

import { DispAposentoPage } from './disp-aposento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DispAposentoPageRoutingModule
  ],
  declarations: [DispAposentoPage]
})
export class DispAposentoPageModule {}
