import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'aposentos',
        loadChildren: () =>
          import('../aposentos/aposentos.module').then(
            (m) => m.AposentosPageModule
          ),
      },
      {
        path: 'dispositivos',
        loadChildren: () =>
          import('../dispositivos/dispositivos.module').then(
            (m) => m.DispositivosPageModule
          ),
      },
    ],
  },
  {
    path: '',
    redirectTo: '/menu/menu/home',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
