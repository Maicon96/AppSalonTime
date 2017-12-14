import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SalonTimePage } from '../salon-time/salon-time';
import {FotoPage} from "../foto/foto";
import {HorariosPage} from "../horarios/horarios";

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToSalonTime(params){
    if (!params) params = {};
    this.navCtrl.push(SalonTimePage);
  }
  goToFoto(params){
    if (!params) params = {};
    this.navCtrl.push(FotoPage);
  }
  goToHorarios(params){
    if (!params) params = {};
    this.navCtrl.push(HorariosPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
