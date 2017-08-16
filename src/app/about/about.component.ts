import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  orientation:string;
  h1HeaderFontSize:string;
  pFontSize:string;
  getValue(event) {
    this.orientation = event.orientation;
    this.h1HeaderFontSize = event.orientation === "landscape" ? "6vh" : "6vw";
    this.pFontSize = event.orientation === "landscape" ? "3.5vh" : "3.5vw";
  }
}
