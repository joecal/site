import { Component, OnInit, HostListener } from '@angular/core';
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

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.divFlex = orientation === "landscape" && height < 450 ?
      9 : orientation === "landscape" && height > 450 ? 8 :
      orientation === "portrait" && width < 450 ? 15 :
      orientation === "portrait" && width > 450 ? 9 : null;
  }
}
