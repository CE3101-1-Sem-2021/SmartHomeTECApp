import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuPage } from './menu/menu.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'aposentos',
    loadChildren: () => import('./aposentos/aposentos.module').then( m => m.AposentosPageModule)
  },
  {
    path: 'dispositivos',
    loadChildren: () => import('./dispositivos/dispositivos.module').then( m => m.DispositivosPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
