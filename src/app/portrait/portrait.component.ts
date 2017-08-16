import { Component } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css'],
  animations: [ growShrink ]
})
export class PortraitComponent {
  orientation:string;
  portraitMaxWidth:string;
  getValue(event) {
    this.orientation = event.orientation;
    this.portraitMaxWidth = event.orientation === "landscape" ? "20vw" : "20vh";
  }
}
