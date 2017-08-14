import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  h1HeaderFontSize:string;
  pFontSize:string;
  getValue(event) {
    this.h1HeaderFontSize = event.h1HeaderFontSize;
    this.pFontSize = event.pFontSize;
  }
}
