import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { SignUpPage } from '../sign-up/sign-up';

import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public loginObservable: Observable<string> = new Observable((observer) => {
    observer.next('text1');
    setTimeout(() => {
      observer.next('text2');
    }, 5000)
  })

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    this.loginObservable.subscribe((data: string) => {
      console.log(data);
    })
  }

  goToSignUpPage() {
    this.navCtrl.push(SignUpPage);
  }

}
