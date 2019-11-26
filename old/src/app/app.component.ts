import { Component, Inject, PLATFORM_ID, OnInit, AfterViewInit, ViewChildren, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { isPlatformBrowser } from '@angular/common';
import { Meta, Title} from '@angular/platform-browser';
import * as Trianglify from 'trianglify';

@Component({
  selector: 'app-root',
  animations: [
    trigger('opacity', [
      state('show' , style({ opacity: 1 })),
      transition('* => *', animate('2s ease-in-out'))
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  opacity:string;
  homeOpacity:number;
  aboutOpacity:number;
  skillsOpacity:number;
  workOpacity:number;
  contactOpacity:number;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, meta: Meta, title: Title) {
    title.setTitle('Joe Calvillo Portfolio');

    meta.addTags([
      { name: 'keywords', content: 'Joe Calvillo Portfolio'},
      { name: 'description', content: 'Joe Calvillo Portfolio'}
    ]);
  }

  ngOnInit() {this.onWindowResize()}

  @HostListener("window:resize", [])

  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let orientation = width > height ? "landscape" : "portrait";
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      let pattern = Trianglify({
        width: document.body.clientWidth, height: document.body.clientHeight,
        variance: "1",cell_size: 200, seed: 'muzbg', x_colors:
        ['#ffffff','#ffffff','#fdfdfd','#fcfcfc','#fbfbfb','#fcfcfc','#fdfdfd','#ffffff','#ffffff'],
        y_colors: 'match_x',color_space: 'rgb'})

      document.body.style['background-image'] = 'url(' + pattern.png() + ')';

      setTimeout(() => {this.opacity = 'show'},0);
    }
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
    if (isPlatformBrowser(this.platformId)) {
      this.homeOpacity = this.setOpacity(null,"home");
      this.aboutOpacity = this.setOpacity("skills","about");
      this.skillsOpacity = this.setOpacity("work","skills");
      this.workOpacity = this.setOpacity("contact","work");
      this.contactOpacity = this.setOpacity(null,"contact");
    }
  }

  inView(element) {
    if (isPlatformBrowser(this.platformId)) {
      let top = element.offsetTop;
      return (top < (window.pageYOffset + window.innerHeight));
    }
  }

  setOpacity(element1,element2) {
    if (isPlatformBrowser(this.platformId)) {
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
}
