import { Component, Inject, PLATFORM_ID, OnInit, HostListener } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { growShrink } from '../shared/grow.shrink';
import { greyscale } from '../shared/greyscale';

@Component({
  selector: 'app-links',
  templateUrl: './links.component.html',
  styleUrls: ['./links.component.css'],
  animations: [ growShrink, greyscale ]
})
export class LinksComponent {
  divFlex:number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let orientation = width > height ? "landscape" : "portrait";

      this.divFlex = orientation === "landscape" && height < 450 ?
        9 : orientation === "landscape" && height > 450 ? 8 :
        orientation === "portrait" && width < 450 ? 15 :
        orientation === "portrait" && width > 450 ? 9 : null;
    }
  }
}
