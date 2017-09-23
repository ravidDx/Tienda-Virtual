import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	usuario:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	//recibiendo parametros
  	this.usuario = this.navParams.get("parametro");

  }

}
