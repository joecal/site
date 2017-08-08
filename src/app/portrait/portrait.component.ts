import { Component, Input } from '@angular/core';
import { growShrink } from '../grow.shrink';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css'],
  animations: [ growShrink ]
})
export class PortraitComponent {
  @Input('flex') fxFlex: number;
  growShrink(target) {
    target['state'] = target['state'] === undefined ||
      target['state'] === 'small' ? target['state'] = 'large' :
      target['state'] = 'small';
  }
}
