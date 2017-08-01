import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-checkout',
  templateUrl: 'checkout.html',
})
export class CheckoutPage {
  user;
  dream;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.dream=this.navParams.get('dream');
    this.user=this.navParams.get('user');

    console.log('user->',this.user);
    console.log('dream->',this.dream);
  }

}
