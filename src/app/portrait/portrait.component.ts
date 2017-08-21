import { Component, OnInit, HostListener } from '@angular/core';
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

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.portraitMaxWidth = orientation === "landscape" ? "20vw" : "20vh";
  }
}
