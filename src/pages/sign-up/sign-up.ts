import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SessionProvider } from '../../providers/session/session';
import { Password } from '../../models/password';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { formGroupNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  //public login: boolean;
  public account = new Password();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private sessionService: SessionProvider
  ) {
  }

  // アカウント作成
  submitSignUp(e: Event): void {
    e.preventDefault();
    // パスワード確認
    if(this.account.password !== this.account.password_confirmation) {
      alert('パスワードが異なります。')
      return;
    }
    this.sessionService.signup(this.account);
    this.account.reset();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    //this.login = this.sessionService.session.login;
    //console.log('LoginPage-login:' + this.login);
  }

}
