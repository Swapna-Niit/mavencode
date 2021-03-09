import { environment } from '../environments/environment';
import { ApiAiClient } from 'api-ai-javascript/es6/ApiAiClient';
import { Observable } from 'rxjs/';
import { BehaviorSubject } from 'rxjs/';
import { Injectable } from '@angular/core';
import { Message } from './message';



@Injectable({
  providedIn: 'root'
})
export class ChatService {
  readonly token = environment.dialogflow.angularBot;
  readonly _client = new ApiAiClient({ accessToken: this.token });
  //conversation = new BehaviorSubject<Message[]>([]);
  conversation = new BehaviorSubject<Message[]>([]);
  data = this.conversation.asObservable();

  constructor() { }
  // Sends and receives messages via DialogFlow
  async talk(msg: string) {
    const userMessage = new Message(msg, 'user');
    this.update(userMessage);
    const res = await this._client.textRequest(msg);
    const speech = res.result.fulfillment.speech;
    const botMessage = new Message(speech, 'bot');
    this.update(botMessage);
  }
  // Adds message to source  
  update(msg: Message) {
    this.conversation.next([msg]);
  }

}
