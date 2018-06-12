import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';;

//import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginSubject: Subject<number> = new Subject();
  public loginState = this.loginSubject.asObservable();
  public count = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.loginState.subscribe((data: number) => {
      console.log(data);
    })
  }

  clickNext() {
    this.count++;
    this.loginSubject.next(this.count);
  }

  goToSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

}
