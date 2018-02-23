import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  createChatroom() {
    var uniqid = Date.now();
    var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
    var chatroomId = randLetter + Date.now();
    console.log('chatroomId = ', chatroomId);
  };

  ngOnInit() {
  }

}
