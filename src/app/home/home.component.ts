import { Component } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ growShrink ]
})
export class HomeComponent {
  orientation:string;
  h1FontSize:string;
  getValue(event) {
    this.orientation = event.orientation;
    this.h1FontSize = event.orientation === "landscape" ? "7vh" : "7vw";
  }
}
