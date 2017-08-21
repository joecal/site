import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  h1HeaderFontSize:string;
  submitted:boolean = false;

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.h1HeaderFontSize = orientation === "landscape" ? "6vh" : "6vw";
  }

  onSubmitted(event) {
    this.submitted = event;
  }
}
