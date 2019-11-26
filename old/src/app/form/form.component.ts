import { Component, Inject, PLATFORM_ID, OnInit, HostListener, EventEmitter, Output } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formFontsize:string;
  inputMaxHeight:string;
  msgStatus:string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private http: Http) {}

  ngOnInit() {this.onWindowResize()}

  @HostListener('window:resize', [])

  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let orientation = width > height ? "landscape" : "portrait";

      this.formFontsize = orientation === "landscape" && height < 450 ?
        '4.8vh' : orientation === "landscape" && height > 450 ? '3vh' :
        orientation === "portrait" && width < 450 ? '5vw' :
        orientation === "portrait" && width > 450 ? '3vw' : null;

      this.inputMaxHeight = orientation === "landscape" && height < 450 ?
        '14.8vh' : orientation === "landscape" && height > 450 ? '10vh' :
        orientation === "portrait" && width < 450 ? '25vw' :
        orientation === "portrait" && width > 450 ? '10vw' : null;
    }
  }

  @Output() onSubmitted = new EventEmitter();
  @Output() onMsgStatus = new EventEmitter();

  newMessage(contactForm,values) {
    this.onSubmitted.emit(true);
    contactForm.reset();

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.post('https://joecal.herokuapp.com/mail', values, options).subscribe(data => {
       if(data.json().success) {
         this.onSubmitted.emit(false);
         this.msgStatus = data.json().success;
         setTimeout(() => {
           this.msgStatus = undefined;
         }, 4000);
       } else if (data.json().error) {
         this.onSubmitted.emit(false);
         this.msgStatus = data.json().error;
         setTimeout(() => {
           this.msgStatus = undefined;
         }, 4000);
       } else {
         this.onSubmitted.emit(false);
         this.msgStatus = "Oops, something broke!";
         setTimeout(() => {
           this.msgStatus = undefined;
         }, 4000);
       }
    })
  }
}
