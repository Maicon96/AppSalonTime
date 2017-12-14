import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { CadastroUsuRioPage } from '../cadastro-usu-rio/cadastro-usu-rio';
import {LoginProvider, LoginCRUD} from "../../providers/login/login";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {


  constructor(public navCtrl: NavController) {
  }
  goToSalonTime(params){
    if (!params) params = {};
    this.navCtrl.push(MenuPage);
  }
  goToCadastroUsuRio(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroUsuRioPage);
  }

}
