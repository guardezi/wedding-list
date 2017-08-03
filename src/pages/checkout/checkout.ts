import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  user;
  dream;
  payment;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dream=this.navParams.get('dream');
    this.user=this.navParams.get('user');
    this.payment=this.navParams.get('payment');
    this.payment=this.payment.response;
    console.log('user->',this.user);
    console.log('dream->',this.dream);
    console.log('payment->',this.payment);
  }

}
