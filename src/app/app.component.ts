import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy, HostListener } from '@angular/core';
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
    this.fontSize = ~~(this.height / 160) + 'em';
    this.orientation = this.width > this.height ? "landscape" : "portrait";
    this.fxFlex = this.orientation === "portrait" && this.height < 1000 ?
      ~~((this.width / this.height) * 140) : (this.orientation === "portrait" &&
      this.height > 1000 ? ~~((this.width / this.height) * 90) :
      ~~((this.height / this.width) * 75));
  }
  // @HostListener("window:wheel", ["$event"])
  // onWindowWheel(event) {
  //   event.deltaY > 0 ? (this.scrollingDown = true, this.scrollingUp = false) :
  //     (this.scrollingUp = true, this.scrollingDown = false);

    // this.scrollingDown === true && this.down < window.innerWidth &&
    //   this.up > -window.innerWidth ? (this.down++, this.up--) :
    //   this.scrollingUp === true && this.up < 0 && this.down > 0 ?
    //   (this.up++, this.down--) : null;

    // if(this.scrollingDown === true) {
    //   if(this.fade <= 1.05 && this.fade >= -0.05) {
    //     this.fade -= 0.05;
    //   }
    //   console.log(this.fade)
    // }
    // if(this.scrollingUp === true) {
    //   if(this.fade <= 1 && this.fade >= -0.06) {
    //     this.fade += 0.05;
    //   }
    //   console.log(this.fade)
    // }
    // this.fade = this.scrollingDown === true && this.fade <= 1 && this.fade >= 0 ? this.fade -= 0.05 : this.scrollingUp === true && this.fade <= 1 && this.fade >= 0 ? this.fade += 0.05 : null;
    // console.log(this.fade)

    // this.moveUp = 'translateY(' + -(this.down * 4) + 'px)';
    // this.moveLeft = 'translateX(' + -(this.down * 4) + 'px)';
    // this.moveRight = 'translateX(' + (this.down * 4) + 'px)';
  // }

}
