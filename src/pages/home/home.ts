import { Component } from '@angular/core';
import { NavController,NavParams, Slides,ModalController,LoadingController,Events} from 'ionic-angular';

import { LoginPage } from '../login/login';
import { CheckoutPage } from '../checkout/checkout';

import { CoupleProvider } from '../../providers/couple/couple';
import { UserProvider } from '../../providers/user/user';
import { PayProvider } from '../../providers/pay/pay';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  couple=Object();
  dreams=[];

  constructor(public navCtrl: NavController,
    private _couple:CoupleProvider,
    private user:UserProvider,
    private pay:PayProvider) {
    this.getCouple();
  }

  selectGift(dream){
    this.user.fbLogin()
    .then(user=>{
      this.pay.getPayment(user,dream)
      .then(payment=>{
        this.navCtrl.push(CheckoutPage,{dream:dream,user:user, payment:payment});
      });
    });
  }

  getCouple(){
    this._couple.getCouple()
    .then(data=>{
      console.log("data from server-> ",data);
      this.couple = data;
    })
  }
}
