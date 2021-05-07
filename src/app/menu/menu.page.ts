import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  pages = [
    {
      title: 'Inicio',
      url: '/menu/menu/home',
    },
    {
      title: 'Aposentos',
      url: '/menu/menu/aposentos',
    },
    {
      title: 'Dispositivos',
      url: '/menu/menu/dispositivos',
    },
  ];

  selectedPath = '';
  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      //console.log('This:' + this.selectedPath);
    });
  }

  ngOnInit() {}
}
