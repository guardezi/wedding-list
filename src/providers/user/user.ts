import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';


declare var FB;

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
    */
  @Injectable()
  export class UserProvider {

    constructor(public http: Http,private storage:Storage) {
      FB.init({
        appId      : '465416357172531',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.8'
      });
      FB.AppEvents.logPageView();

      FB.getLoginStatus(function(response) {
        console.log('facebook status',response);
      });
    }

    isFirstTime(){
      return new Promise((resolve, reject)=> {
        this.storage.get('hasSeenTutorial')
        .then((hasSeenTutorial) => {
          if (hasSeenTutorial) {
            resolve(false);
          } else {
            // this.storage.set('hasSeenTutorial','true');
            resolve(true);
          }
        });
      });
    }

    fbLogin(){
      return new Promise((resolve, reject)=> {
        FB.getLoginStatus(function(response) {
          if (response.authResponse) {
            FB.api('/me?fields=id,name,email,first_name,last_name,gender', function(response) {
              response.photo="https://graph.facebook.com/"+response.id+"/picture?type=square";
              resolve(response);
            });
          } else {
            FB.login(function(response) {
              if (response.authResponse) {
                FB.api('/me', function(response) {
                  response.photo="https://graph.facebook.com/"+response.id+"/picture?type=square";
                  resolve(response);
                });
              } else {
                console.log('User cancelled login or did not fully authorize.');
              }
            });
          }
        });
      });
    }

  }
