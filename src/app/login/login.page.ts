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
    this.loginService
      .validateCredentials(this.usernameFld, this.passwordFld)
      .then((response) => {
        console.log(response);
        if (!response.ok) {
          throw new Error(response.toString());
        }
        return response.text();
      })
      .then((result) => {
        console.log(result);
        this.loginService.token = result;
        this.router.navigateByUrl('menu');
      })
      .catch(async (err) => {
        console.log(err);
        const alert = await this.alertController.create({
          cssClass: 'my-custom-class',
          header: 'Alerta',
          message: 'Credenciales incorrectos',
          buttons: ['OK'],
        });
        await alert.present();
        this.usernameFld = '';
        this.passwordFld = '';
      });
  }
}
