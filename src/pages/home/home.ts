import { Component } from '@angular/core';
import { NavController,NavParams, Slides,ModalController,LoadingController,Events} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CheckoutPage } from '../checkout/checkout';

import { CoupleProvider } from '../../providers/couple/couple';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  couple=Object();
  dreams=[];

  constructor(public navCtrl: NavController,
    private _couple:CoupleProvider,
    private user:UserProvider) {
    this.getCouple();
  }

  selectGift(dream){
    console.log('selecitonado -> ',dream);
    this.user.fbLogin()
    .then(user=>{
      console.log("user data->",user);

      // this.navCtrl.push(CheckoutPage);
    });
    // this.navCtrl.push(LoginPage);
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
