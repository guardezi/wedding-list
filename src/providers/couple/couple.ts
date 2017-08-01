import { Injectable } from '@angular/core';


import { DeviceProvider } from '../device/device';

@Injectable()
export class CoupleProvider {

  constructor(public device:DeviceProvider) {
    console.log('Hello Couple Provider');
  }

  getCouple(){
    this.device.get(this.device.API+this.device.COUPLE)
    .then(res=>{
      console.log('data from server',res.json());
    })
  }

}
