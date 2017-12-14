import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



import { LoginPage } from '../pages/login/login';
import { DatabaseProvider } from "../providers/database/database";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, dbProvider: DatabaseProvider) {
    platform.ready().then(() => {

      statusBar.styleDefault();
      splashScreen.hide();

      dbProvider.createDataBase()
        .then(() => {
          this.openHomePage(splashScreen);
        })
        .catch()

    });
  }

  private openHomePage(splashScreen: SplashScreen){
    splashScreen.hide();
    this.rootPage = LoginPage;
  }

}
