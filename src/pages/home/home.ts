import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Comment } from '../../models/chat';

const COMMENTS: Comment[] = [
  { name: "Suzuki Taro", content: "1つ目のコメントです。"},
  { name: "Suzuki Taro", content: "2つ目のコメントです。"},
  { name: "Suzuki Taro", content: "3つ目のコメントです。"}
];

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  public content = '';
  public comments = COMMENTS;

  constructor(public navCtrl: NavController) {

  }

}
