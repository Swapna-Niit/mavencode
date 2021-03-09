// import { Component, OnInit } from '@angular/core';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ChatService } from '../chat.service';
import { Message } from '../message';
import { StringDecoder } from 'string_decoder';



@Component({
  selector: 'app-chatcompoent',
  templateUrl: './chatcompoent.component.html',
  styleUrls: ['./chatcompoent.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ChatcompoentComponent implements OnInit {
  //messages: Observable<Message[]>;
  messages: Message[]= new Array();
  messaged : Message[];
  strMsg: string;
  data : any;
  
  constructor(private chat: ChatService) { }

  ngOnInit() {
    //this.messages = this.chat.conversation.asObservable().scan((acc, val) => acc.concat(val)); 
      this.chat.data.subscribe(data => {
      //do what ever needs doing when data changes
      this.messaged = data;
      for ( var i = 0; i < this.messaged.length; i++){
        this.messages.push(this.messaged[i]);
      }
      //this.messages.concat(this.messaged);
       
      console.log(this.messages);
    })
    ;
  }
  sendMessage() {
    this.chat.talk(this.strMsg);
    this.strMsg = '';
}
}
