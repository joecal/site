import { Component, Inject, PLATFORM_ID, OnInit, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { growShrink } from '../shared/grow.shrink';
import { greyscale } from '../shared/greyscale';

@Component({
  selector: 'app-portrait',
  templateUrl: './portrait.component.html',
  styleUrls: ['./portrait.component.css'],
  animations: [ growShrink, greyscale ]
})
export class PortraitComponent {
  portraitMaxWidth:string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let orientation = width > height ? "landscape" : "portrait";

      this.portraitMaxWidth = orientation === "landscape" ? "20vw" : "20vh";
    }
  }
}
