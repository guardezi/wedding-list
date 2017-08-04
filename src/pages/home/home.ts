import { Component } from '@angular/core';
import { NavController,NavParams, Slides,ModalController,LoadingController,AlertController} from 'ionic-angular';

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
    private loader:LoadingController,
    private alert:AlertController,
    private _couple:CoupleProvider,
    private user:UserProvider,
    private pay:PayProvider) {
    this.getCouple();
  }

  loading=this.loader.create({
    spinner: 'hide',
    content: `
    <div class="custom-spinner-container">
    <div class="custom-spinner-box"></div>
    Carregando Aguarde...
    </div>`
  });
  alerter = this.alert.create({
    title: 'Ops',
    message: 'Ops, por favor informe com de quanto é o seu presente',
    buttons: ['Ok']
  });

  selectGift(dream){
    if(dream.contribution){
      this.user.fbLogin()
      .then(user=>{
        this.loading.present();
        dream.type='main';
        this.pay.getPayment(user,dream)
        .then(payment=>{
          this.loading.dismiss();
          this.navCtrl.push(CheckoutPage,{dream:dream,user:user, payment:payment});
        })
        .catch(e=>{
          this.loading.dismiss();
          this.alerter.present();
        });
      });
    }else{
      this.alerter.present();
    }
  }

  getCouple(){
    this._couple.getCouple()
    .then(data=>{
      console.log("data from server-> ",data);
      this.couple = data;
    })
  }
}
