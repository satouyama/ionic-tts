import {Component} from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text: string;
  rate: number;
  locale: string;
 
  constructor(private tts: TextToSpeech) {
    this.text = 'Initial text';
    this.rate = 1;
    this.locale = 'pt-BR';
  }
 
  playText() {
    this.tts.speak({
      text: this.text,
      rate: this.rate / 10,
      locale: this.locale
    })
      .then(() => console.log('Success'))
      .catch((reason: any) => console.log(reason));
  }
 
}