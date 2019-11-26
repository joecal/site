import { Component, Inject, PLATFORM_ID, OnInit, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ growShrink ]
})
export class HomeComponent {
  h1FontSize:string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let orientation = width > height ? "landscape" : "portrait";

      this.h1FontSize = orientation === "landscape" ? "7vh" : "7vw";
    }
  }
}
