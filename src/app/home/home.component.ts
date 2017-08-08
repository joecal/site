import { Component } from '@angular/core';
import { growShrink } from '../grow.shrink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ growShrink ]
})
export class HomeComponent {
  growShrink(target) {
    target['state'] = target['state'] === undefined ||
      target['state'] === 'small' ? target['state'] = 'large' :
      target['state'] = 'small';
  }
}
