import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DispAposentoPage } from './disp-aposento.page';

const routes: Routes = [
  {
    path: '',
    component: DispAposentoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DispAposentoPageRoutingModule {}
