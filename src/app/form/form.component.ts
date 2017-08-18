import { Component } from '@angular/core';
import { Message } from './message';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  width:number;
  height:number;
  orientation:string;
  formFontsize:string;
  inputMaxHeight:string;
  submitted:boolean = false;

  model = new Message('', '', '');

  constructor(private http: Http) {}

  getValue(event) {
    this.width = event.width;
    this.height = event.height;
    this.orientation = event.orientation;

    this.formFontsize = event.orientation === "landscape" && event.height < 450 ?
      '4.8vh' : event.orientation === "landscape" && event.height > 450 ? '3vh' :
      event.orientation === "portrait" && event.width < 450 ? '5vw' :
      event.orientation === "portrait" && event.width > 450 ? '3vw' : null;

    this.inputMaxHeight = event.orientation === "landscape" && event.height < 450 ?
      '14.8vh' : event.orientation === "landscape" && event.height > 450 ? '10vh' :
      event.orientation === "portrait" && event.width < 450 ? '25vw' :
      event.orientation === "portrait" && event.width > 450 ? '10vw' : null;
  }

  onSubmit() {
    // console.log(contactForm)
    // console.log(values)
    this.submitted = true;
    // contactForm.reset();
  }

  newMessage(contactForm,values) {
    console.log(contactForm)
    console.log(values)
    contactForm.reset();

    let headers = new Headers();

    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http.post('http://localhost:4000/mail', values, {headers: headers}).subscribe((data) => {
       if(data.json().success) {
         console.log("success: ",data)
       } else {
         console.log("fail: ",data)
       }
    })

  }
}
