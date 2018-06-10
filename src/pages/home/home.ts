import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
//import { Observable } from 'rxjs/observable';

import { Comment, User } from '../../models/chat';

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
// const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
// COMMENTSを削除

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) contents: Content;

  //item: Observable<{}>;
  public FB_comments: AngularFireList<{}>;
  public content = '';
  public comments: Comment[] = [];  //更新
  public current_user = CURRENT_USER;
  
  constructor(
    public navCtrl: NavController,
    db: AngularFireDatabase
  ) {
    //this.item = db.object('item').valueChanges();
    this.FB_comments = db.list('/comments');
    this.FB_comments.snapshotChanges().subscribe((actions:any[]) => {
      this.comments = []; // コメントを初期化
      actions.forEach((action: any) => {
        // 取得したデータを反映
        const val = action.payload.val();
        this.comments.push(new Comment(val.user, val.content).setData(val.date));
      });
    });
  }


  ionViewDidLoad()
  {
     setTimeout(() => {
        this.contents.scrollToBottom(300);
     }, 1000);
  }

  addComment(comment: string) {
    if (comment) {
      this.FB_comments.push(new Comment(this.current_user, comment));
      this.content = '';
      setTimeout(() => {
        this.contents.scrollToBottom(300);
      }, 1000);
    }
  }

}
