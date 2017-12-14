import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SalonTimePage } from '../pages/salon-time/salon-time';
import { HorariosPage } from '../pages/horarios/horarios';
import { LoginPage } from '../pages/login/login';
import { MenuPage } from '../pages/menu/menu';
import {FotoPage} from "../pages/foto/foto";
import { CalendarioPage } from '../pages/calendario/calendario';
import { CadastroUsuRioPage } from '../pages/cadastro-usu-rio/cadastro-usu-rio';
import { SQLite } from '@ionic-native/sqlite';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DatabaseProvider } from '../providers/database/database';
import { LoginProvider } from '../providers/login/login';


@NgModule({
  declarations: [
    MyApp,
    SalonTimePage,
    LoginPage,
    CalendarioPage,
    CadastroUsuRioPage,
    MenuPage,
    FotoPage,
    HorariosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SalonTimePage,
    LoginPage,
    CalendarioPage,
    CadastroUsuRioPage,
    MenuPage,
    FotoPage,
    HorariosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider,
    LoginProvider
  ]
})
export class AppModule {}
