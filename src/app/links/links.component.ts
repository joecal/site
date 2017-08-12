import { Component, Output, EventEmitter } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations: [ growShrink ]
})
export class LinksComponent {

  @Output() onMailClicked = new EventEmitter();

  toggleState(target) {
    target['state'] = target['state'] === undefined ||
      target['state'] === 'small' ? target['state'] = 'large' :
      target['state'] = 'small';
  }
  mailBool() {
    this.onMailClicked.emit()
  }
}
