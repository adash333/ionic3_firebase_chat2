import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app'
import { Subject } from 'rxjs/Subject';

import { Session } from '../../models/session';
import { Password } from '../../models/password';

@Injectable()
export class SessionProvider {

  public session = new Session();
  public sessionSubject = new Subject<Session>();
  public sessionState = this.sessionSubject.asObservable();

  constructor(
    public http: HttpClient,
    private afAuth: AngularFireAuth
  ) {
    console.log('Hello SessionProvider Provider');
  }

  login(account: Password): void {
    //this.session.login = true;
    //this.sessionSubject.next(this.session);
    //this.navCtrl.push(HomePage);
    this.afAuth
    .auth
    .signInWithEmailAndPassword(account.email, account.password)
    .then(() => {
      this.session.login = true;
      this.sessionSubject.next(this.session);
      //this.navCtrl.push(HomePage);  // navCtrl.pushは各Pageから行う
    }).then(() => alert('ログインしました。'))
    .catch( err => {
      console.log(err);
      alert('ログインに失敗しました。\n' + err);
    })
  }

  logout(): void {
    //this.sessionSubject.next(this.session.reset());
    //this.navCtrl.push(LoginPage);
    this.afAuth
    .auth
    .signOut()
    .then(() => {
      this.sessionSubject.next(this.session.reset());
      //this.navCtrl.push(LoginPage); // navCtrl.pushは各Pageから行う
    }).then(() => alert('ログアウトしました。'))
    .catch( err => {
      console.log(err);
      alert('ログアウトに失敗しました。\n' + err);
    })
  }

  // アカウント作成
  signup(account: Password): void {
    this.afAuth
    .auth
    .createUserWithEmailAndPassword(account.email, account.password) // アカウント作成
    .then( user => user.sendEmailVerification()) // メールアドレス確認
    .then(() => alert('メールアドレス確認メールを送信しました。'))
    .catch( err => {
      console.log(err);
      alert('アカウントの作成に失敗しました。\n' + err)
    })
  }

}
