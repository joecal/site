import { Component, OnInit, HostListener } from '@angular/core';
import { growShrink } from '../shared/grow.shrink';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ growShrink ]
})
export class HomeComponent {
  h1FontSize:string;

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.h1FontSize = orientation === "landscape" ? "7vh" : "7vw";
  }
}
