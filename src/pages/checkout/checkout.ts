import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { PayProvider } from '../../providers/pay/pay';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  user;
  dream;
  payment;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private pay:PayProvider) {
  }

  ionViewDidLoad() {
    this.dream=this.navParams.get('dream');
    this.user=this.navParams.get('user');
    this.payment=this.navParams.get('payment');
    this.payment=this.payment.payment;
  }

}
