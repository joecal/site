import { Component, ViewChildren, ElementRef, HostListener } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

  onWindowScroll() {
    this.homeOpacity = this.setOpacity(null,"home");
    this.aboutOpacity = this.setOpacity("skills","about");
    this.skillsOpacity = this.setOpacity("work","skills");
    this.workOpacity = this.setOpacity("contact","work");
    this.contactOpacity = this.setOpacity(null,"contact");
  }

  inView(element) {
    let top = element.offsetTop;
    return (top < (window.pageYOffset + window.innerHeight));
  }

  setOpacity(element1,element2) {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset :
      document.documentElement.scrollTop || document.body.scrollTop;

    height = height / 3;

    let value = element2 === "home" ? (height - scrollTop) / height : element2 === "contact" ?
      (-(height - (scrollTop - this.getElements().contact.offsetTop)) / height) + 3 :
      this.inView(this.getElements()[element1]) ?
      (height - (scrollTop - this.getElements()[element2].offsetTop)) / height :
      (-(height - (scrollTop - this.getElements()[element2].offsetTop)) / height) + 3;

    return value;
  }
}
