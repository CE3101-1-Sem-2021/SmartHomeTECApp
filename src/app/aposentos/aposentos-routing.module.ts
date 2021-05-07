import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AposentosPage } from './aposentos.page';

const routes: Routes = [
  {
    path: '',
    component: AposentosPage,
  },
  {
    path: ':disp-aposento',
    loadChildren: () =>
      import('./disp-aposento/disp-aposento.module').then(
        (m) => m.DispAposentoPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AposentosPageRoutingModule {}
