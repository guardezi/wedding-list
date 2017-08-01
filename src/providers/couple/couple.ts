import { Injectable } from '@angular/core';


import { DeviceProvider } from '../device/device';

@Injectable()
export class CoupleProvider {

  constructor(public device:DeviceProvider) {

  }

  getCouple(){
    return new Promise((resolve, reject)=> {

      this.device.get(this.device.API+this.device.COUPLE)
      .then(res=>{
        resolve(res.json());
      });
    });
  }
}
