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
  couple=Object();
  dreams=[];

  constructor(public navCtrl: NavController, private _couple:CoupleProvider) {
    this.getCouple();
  }

  selectGift(dream){
    console.log('selecitonado -> ',dream);
    this.navCtrl.push(LoginPage);
  }

  openCheckout(){
    this.navCtrl.push(CheckoutPage);
  }
  getCouple(){
    this._couple.getCouple()
    .then(data=>{
      this.couple = data;
    })
  }
}
