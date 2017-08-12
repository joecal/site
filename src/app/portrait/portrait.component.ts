import { Component, Input, ElementRef, HostListener} from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css'],
  animations: [ growShrink ]
})
export class PortraitComponent {
  @Input('flex') fxFlex: number;
}
