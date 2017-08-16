import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  orientation:string;
  h1HeaderFontSize:string;
  getValue(event) {
    this.orientation = event.orientation;
    this.h1HeaderFontSize = event.orientation === "landscape" ? "6vh" : "6vw";
  }
}
