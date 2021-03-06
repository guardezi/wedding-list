import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CheckoutPage } from '../pages/checkout/checkout';
import { TourPage } from '../pages/tour/tour';

import { DeviceProvider } from '../providers/device/device';
import { CoupleProvider } from '../providers/couple/couple';
import { UserProvider } from '../providers/user/user';
import { PayProvider } from '../providers/pay/pay';

@NgModule({
  declarations: [
  MyApp,
  HomePage,
  LoginPage,
  CheckoutPage,
  TourPage
  ],
  imports: [
  HttpModule,
  BrowserModule,
  IonicModule.forRoot(MyApp),
  IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
  MyApp,
  HomePage,
  LoginPage,
  CheckoutPage,
  TourPage
  ],
  providers: [
  StatusBar,
  SplashScreen,
  {provide: ErrorHandler, useClass: IonicErrorHandler},
  DeviceProvider,
  CoupleProvider,
  UserProvider,
  PayProvider
  ]
})
export class AppModule {}
