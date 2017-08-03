import { Injectable } from '@angular/core';
import { DeviceProvider } from '../device/device';
/*
  Generated class for the PayProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
    */
  @Injectable()
  export class PayProvider {

    constructor(public device:DeviceProvider) {

    }

    getPayment(user, dream){
      return new Promise((resolve, reject)=> {
        var p = {
          title:dream.title+" por "+ user.name,
          price:Number(dream.contribution)
        }

        this.device.post(this.device.API+this.device.PAY,p)
        .then(pay=>{
          resolve(pay);
        })
        .catch(e=>{
          console.log('error->',e);
        })
      });
    }

  }
