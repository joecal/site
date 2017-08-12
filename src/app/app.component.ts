import { Component, OnInit, Input, ViewChildren, ElementRef, HostListener } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fontClass:string;
  gridFlex: number;
  fxFlex: number;
  homeOpacity:number;
  aboutOpacity:number;
  skillsOpacity:number;
  workOpacity:number;
  contactOpacity:number;

  constructor(meta: Meta, title: Title) {
    title.setTitle('Joe Calvillo Portfolio');

    meta.addTags([
      { name: 'keywords', content: 'Joe Calvillo Portfolio'},
      { name: 'description', content: 'Joe Calvillo Portfolio'}
    ]);
  }

  ngOnInit() {
    this.onWindowResize()
  }

  @HostListener("window:resize", [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.gridFlex = ~~(height / 2);

    this.fontClass = orientation === "portrait" && height < 1000 ?
      "mat-display-1" : (orientation === "portrait" && height > 1000 ?
      "mat-display-2" : orientation === "landscape" && width < 500 ?
      "mat-headline" : orientation === "landscape" && width < 1000 ?
      "mat-display-2" : orientation === "landscape" && width > 1000 ?
      "mat-display-3" : null);

    this.fxFlex = orientation === "portrait" ?
      ~~((width / height) * 90) : (orientation === "landscape" &&
      width < 1000 ? ~~((height / width) * 50) :
      orientation === "landscape" && width > 1000 ?
      ~~((height / width) * 100) : null);
  }

  @ViewChildren('home,about,skills,work,contact') children: ElementRef;

  getElements() {
    const childrenList = this.children['_results']
    const home = childrenList[0]['_element'].nativeElement;
    const about = childrenList[1]['_element'].nativeElement;
    const skills = childrenList[2]['_element'].nativeElement;
    const work = childrenList[3]['_element'].nativeElement;
    const contact = childrenList[4]['_element'].nativeElement;

    return {home:home, about:about, skills:skills, work:work, contact:contact}
  }

  @HostListener("window:scroll", [])

  onWindowWheel() {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset :
      document.documentElement.scrollTop || document.body.scrollTop;

    height = height / 3;

    this.homeOpacity = (height - scrollTop) / height;

    this.aboutOpacity = this.inView(this.getElements().skills) ?
      (height - (scrollTop - this.getElements().about.offsetTop)) / height :
      (-(height - (scrollTop - this.getElements().about.offsetTop)) / height) + 3;

    this.skillsOpacity = this.inView(this.getElements().work) ?
      (height - (scrollTop - this.getElements().skills.offsetTop)) / height :
      (-(height - (scrollTop - this.getElements().skills.offsetTop)) / height) + 3;

    this.workOpacity = this.inView(this.getElements().contact) ?
      (height - (scrollTop - this.getElements().work.offsetTop)) / height :
      (-(height - (scrollTop - this.getElements().work.offsetTop)) / height) + 3;

    this.contactOpacity = (-(height - (scrollTop - this.getElements().contact.offsetTop)) / height) + 3;
  }

  inView(element) {
    var top = element.offsetTop;
    return (top < (window.pageYOffset + window.innerHeight));
  }
}
