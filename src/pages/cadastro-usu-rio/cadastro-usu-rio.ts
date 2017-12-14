import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { LoginProvider, LoginCRUD} from "../../providers/login/login";


@Component({
  selector: 'page-cadastro-usu-rio',
  templateUrl: 'cadastro-usu-rio.html'
})
export class CadastroUsuRioPage {


  constructor(public navCtrl: NavController, private toast: ToastController, private loginProvider: LoginProvider) {

  }

  addLogin(){
    this.navCtrl.push('SalonTimePage');
  }

}
