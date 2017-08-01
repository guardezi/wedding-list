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
      console.log('facebook-> ',FB);
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

    getUserStatus(){

    }

    setUser(){

    }

    userRegister(user){
      console.log('user->',user);
    }

    fbLogin(){
      return new Promise((resolve, reject)=> {
        FB.getLoginStatus(function(response) {
          if (response.authResponse) {
            console.log('Welcome!  Fetching your information.... ');
            FB.api('/me?fields=id,name,email,first_name,last_name,gender', function(response) {
              console.log('Good to see you, ' + response.name + '.');
              resolve(response);
            });
          } else {
            FB.login(function(response) {
              if (response.authResponse) {
                console.log('Welcome!  Fetching your information.... ');
                FB.api('/me', function(response) {
                  console.log('Good to see you, ' + response.name + '.');
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
