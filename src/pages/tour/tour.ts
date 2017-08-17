import { Component } from '@angular/core';
import { NavController, NavParams ,ViewController} from 'ionic-angular';
import { Storage } from '@ionic/storage';



@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private storage:Storage,
    public viewCtrl: ViewController

    ) {
  }

  ionViewDidLoad() {   }

  completeTour(){
    this.storage.set('hasSeenTutorial','true');
    this.viewCtrl.dismiss();
  }

}
