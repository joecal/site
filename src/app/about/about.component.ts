import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  h1HeaderFontSize:string;
  pFontSize:string;

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.h1HeaderFontSize = orientation === "landscape" ? "6vh" : "6vw";
    this.pFontSize = orientation === "landscape" ? "3.5vh" : "3.5vw";
  }
}
