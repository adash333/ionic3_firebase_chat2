import { Component, ViewChild } from '@angular/core';
import { Content } from 'ionic-angular';
import { NavController } from 'ionic-angular';
//import { FormBuilder, FormGroup } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/observable';

import { Comment, User } from '../../models/chat';

const CURRENT_USER: User = new User(1, 'Tanaka Jiro');
const ANOTHER_USER: User = new User(2, 'Suzuki Taro');
const COMMENTS: Comment[] = [
  new Comment(ANOTHER_USER, 'Suzukiの1つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの2つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの1つ目のコメントです。'),
  new Comment(ANOTHER_USER, 'Suzukiの3つ目のコメントです。'),
  new Comment(CURRENT_USER, 'Tanakaの1つ目のコメントです。')
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Content) contents: Content;

  item: Observable<{}>;
  
  public content = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;
  
  constructor(
    public navCtrl: NavController,
    db: AngularFireDatabase
  ) {
    this.item = db.object('item').valueChanges();
  }

  ionViewDidLoad()
  {
     setTimeout(() => {
        this.contents.scrollToBottom(300);
     }, 1000);
  }

  addComment(comment: string) {
    if (comment) {
      this.comments.push(new Comment(this.current_user, comment));
      this.content = '';
      setTimeout(() => {
        this.contents.scrollToBottom(300);
      }, 1000);
    }
  }

}
