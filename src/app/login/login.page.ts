import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LogicServiceService } from './logic-service.service';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usernameFld = '';
  passwordFld = '';

  constructor(
    private loginService: LogicServiceService,
    private router: Router,
    public alertController: AlertController
  ) {}

  ngOnInit() {}

  //Function to validate credentials
  async validateLogin() {
    if (
      this.loginService.validateCredentials(this.usernameFld, this.passwordFld)
    ) {
      this.router.navigateByUrl('menu');
    } else {
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Alerta',
        message: 'Credenciales incorrectos',
        buttons: ['OK'],
      });
      await alert.present();
      this.usernameFld = '';
      this.passwordFld = '';
    }
  }
}
