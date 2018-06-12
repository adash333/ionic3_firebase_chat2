import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';
import { HomePage } from '../home/home';

//import { Observable } from 'rxjs/Observable';
//import { Subject } from 'rxjs/Subject';
import { SessionProvider } from '../../providers/session/session';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public login: boolean;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sessionService: SessionProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.login = this.sessionService.session.login;
    console.log('LoginPage-login:' + this.login);
  }

  goToSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

  submitLogin() {
    this.sessionService.login();
    this.navCtrl.push(HomePage);
  }

}
