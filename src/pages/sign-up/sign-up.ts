import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SessionProvider } from '../../providers/session/session';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  public login: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public sessionService: SessionProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.login = this.sessionService.session.login;
    console.log('LoginPage-login:' + this.login);
  }

}
