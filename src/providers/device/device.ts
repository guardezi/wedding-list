import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DeviceProvider {

  constructor(public http: Http) {
    console.log('Hello DeviceProvider Provider');
  }

  post(url, object){
    return new Promise((resolve, reject)=> {

      var body = JSON.stringify(object);
      var headers = new Headers({ 'Content-Type': 'application/json' });
      var options = new RequestOptions({ headers: headers, method: "post" });

      this.http.post(url, body,options)
      .toPromise()
      .then( (res)=> {
        resolve(res.json());
      })
      .catch((err)=> {
        reject(err);
      });
    });
  }
  get(url){
    return this.http.get(url).toPromise();
  }
  put(url,object){

  }

  // API:string='http://localhost:5000/chadepanela-7e6d3/us-central1/';
  API:string='https://us-central1-chadepanela-7e6d3.cloudfunctions.net/';
  COUPLE_ID:string='9b6d4054-7c48-4b0e-9b00-4d5dc759a283';
  COUPLE:string='couple/'+this.COUPLE_ID;
  PAY:string='pay';
  CONTRIBUTION:string='contribution';
  // API:string='../assets/';
  // COUPLE:string='couple.json';



}
