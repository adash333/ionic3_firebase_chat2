import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Subject } from 'rxjs/Subject';

//import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { HomePage } from '../../pages/home/home';
//import { LoginPage } from '../../pages/login/login';

import { Session } from '../../models/session';

@Injectable()
export class SessionProvider {

  public session = new Session();
  public sessionSubject = new Subject<Session>();
  public sessionState = this.sessionSubject.asObservable();

  constructor(
    public http: HttpClient,
    //public navCtrl: NavController
  ) {
    console.log('Hello SessionProvider Provider');
  }

  login(): void {
    this.session.login = true;
    this.sessionSubject.next(this.session);
    //this.navCtrl.push(HomePage);
  }

  logout(): void {
    this.sessionSubject.next(this.session.reset());
    //this.navCtrl.push(LoginPage);
  }

}
