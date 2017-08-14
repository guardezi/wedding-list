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
          couple:{id:this.device.COUPLE_ID},
          user:user,
          dream:dream,
          price:Number(dream.contribution)
        }
        this.device.post(this.device.API+this.device.PAY,p)
        .then(pay=>{
          resolve(pay);
        })
        .catch(e=>{
          reject(e);
        })
      });
    }

    // registerContribuition(user, dream){
      //   var contribution = {
        //     couple:{id:this.device.COUPLE_ID},
        //     user:user,
        //     dream:dream
        //     // payment:payment
        //   }
        //   console.log('contribution, -> ',contribution);
        //   this.device.post(this.device.API+this.device.CONTRIBUTION,contribution)
        //   .then(r=>{
          //     console.log('resposta -> ', r);
          //   })
          //   .catch(e=>{
            //     console.log('resposta e-> ', e);
            //   })
            // }

          }
