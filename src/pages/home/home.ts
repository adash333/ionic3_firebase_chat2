import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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
  
  public content = '';
  public comments = COMMENTS;
  public current_user = CURRENT_USER;
  
  constructor(public navCtrl: NavController) {

  }

}
