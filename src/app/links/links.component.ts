import { Component } from '@angular/core';
import { growShrink } from '../grow.shrink';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations: [ growShrink ]
})
export class LinksComponent {
  toggleState(target) {
    target['state'] = target['state'] === undefined ||
      target['state'] === 'small' ? target['state'] = 'large' :
      target['state'] = 'small';
  }
}
