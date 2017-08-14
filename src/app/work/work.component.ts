import { Component } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.css']
})
export class WorkComponent {
  h1HeaderFontSize:string;
  getValue(event) {
    this.h1HeaderFontSize = event.h1HeaderFontSize;
  }
}
