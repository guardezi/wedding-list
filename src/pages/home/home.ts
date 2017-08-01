import { Component } from '@angular/core';
import { NavController,NavParams, Slides,ModalController,LoadingController,Events} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CheckoutPage } from '../checkout/checkout';

import { CoupleProvider } from '../../providers/couple/couple';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private couple:CoupleProvider) {
    this.getCouple();
  }

  selectGift(){
    this.navCtrl.push(LoginPage);
  }

  openCheckout(){
    this.navCtrl.push(CheckoutPage);
  }
  getCouple(){
    this.couple.getCouple();
  }
}
