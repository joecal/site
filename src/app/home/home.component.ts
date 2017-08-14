import { Component } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ growShrink ]
})
export class HomeComponent {
  h1FontSize:string;
  jcFontSize:string;
  getValue(event) {
    this.h1FontSize = event.h1FontSize
    this.jcFontSize = event.h1FontSize === "9vh" ? "8vh" : "8vw"
  }
}
