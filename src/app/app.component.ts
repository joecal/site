import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, ViewChildren, ElementRef, HostListener } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  width: number;
  height: number;
  fontSize:string;
  orientation: string;
  gridFlex: number;
  fxFlex: number;
  homeOpacity:number;
  aboutOpacity:number;
  skillsOpacity:number;
  workOpacity:number;

  constructor(meta: Meta, title: Title, private change: ChangeDetectorRef) {
    title.setTitle('Joe Calvillo Portfolio');

    meta.addTags([
      { name: 'keywords', content: 'Joe Calvillo Portfolio'},
      { name: 'description', content: 'Joe Calvillo Portfolio'}
    ]);
  }

  ngOnInit() {
    this.change.markForCheck();
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.gridFlex = ~~(this.height / 2);
    this.orientation = this.width > this.height ? "landscape" : "portrait";

    this.fontSize = this.orientation === "portrait" && this.height < 1000 ?
      ((this.width / this.height) * 3.5) + 'em' :(this.orientation === "portrait" &&
      this.height > 1000 ? ~~((this.width / this.height) * 6) + 'em' :
      this.orientation === "landscape" && this.width < 1000 ?
      ((this.height / this.width) * 4) + 'em' : this.orientation === "landscape" &&
      this.width > 1000 ? ((this.height / this.width) * 7) + 'em' : null);

    this.fxFlex = this.orientation === "portrait" ?
      ~~((this.width / this.height) * 90) : (this.orientation === "landscape" &&
      this.width < 1000 ? ~~((this.height / this.width) * 50) :
      this.orientation === "landscape" && this.width > 1000 ?
      ~~((this.height / this.width) * 100) : null);
  }

  @ViewChildren('home,about,skills,work') children: ElementRef;
  @HostListener("window:scroll", [])

  onWindowWheel() {
    let childrenList = this.children['_results']
    let home = childrenList[0]['_element'].nativeElement;
    let about = childrenList[1]['_element'].nativeElement;
    let skills = childrenList[2]['_element'].nativeElement;
    let work = childrenList[3]['_element'].nativeElement;
    let height = window.innerHeight;
    let scrollTop = window.pageYOffset !== undefined ? window.pageYOffset :
      document.documentElement.scrollTop || document.body.scrollTop;

    height = height / 3;

    this.homeOpacity = (height - scrollTop) / height;
    this.aboutOpacity = (height - (scrollTop - about.offsetTop)) / height;
    this.skillsOpacity = (height - (scrollTop - skills.offsetTop)) / height;
    this.workOpacity = (height - (scrollTop - work.offsetTop)) / height;
  }
  // @HostListener("window:wheel", ["$event"])
  // onWindowWheel(event) {
  //   event.deltaY > 0 ? (this.scrollingDown = true, this.scrollingUp = false) :
  //     (this.scrollingUp = true, this.scrollingDown = false);

    // this.scrollingDown === true && this.down < window.innerWidth &&
    //   this.up > -window.innerWidth ? (this.down++, this.up--) :
    //   this.scrollingUp === true && this.up < 0 && this.down > 0 ?
    //   (this.up++, this.down--) : null;

    // this.moveUp = 'translateY(' + -(this.down * 4) + 'px)';
    // this.moveLeft = 'translateX(' + -(this.down * 4) + 'px)';
    // this.moveRight = 'translateX(' + (this.down * 4) + 'px)';
  // }
}
