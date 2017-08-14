import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  h1HeaderFontSize:string;
  getValue(event) {
    this.h1HeaderFontSize = event.h1HeaderFontSize;
  }
}
