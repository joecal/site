import { Component, Output, EventEmitter } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations: [ growShrink ]
})
export class LinksComponent {
  width:number;
  height:number;
  divFlex:number;
  orientation:string;

  getValue(event) {
    this.width = event.width;
    this.height = event.height;
    this.orientation = event.orientation;

    this.divFlex = event.orientation === "landscape" && event.height < 450 ?
      9 : event.orientation === "landscape" && event.height > 450 ? 8 :
      event.orientation === "portrait" && event.width < 450 ? 15 :
      event.orientation === "portrait" && event.width > 450 ? 9 : null;
  }
}
