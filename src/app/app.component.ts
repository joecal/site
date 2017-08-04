import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
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
  orientation: string;
  gridFlex: number;
  gridHeight:string;
  fxFlex: number;
  mail:boolean = false;

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
    this.orientation = this.width > this.height ? "landscape" : "portrait";
    this.gridHeight = this.mail === true ? '140vh' : '100vh';
    this.gridFlex = ~~(this.height / 2);
    this.fxFlex = this.orientation === "portrait" && this.height < 1000 ?
      ~~((this.width / this.height) * 140) : (this.orientation === "portrait" &&
      this.height > 1000 ? ~~((this.width / this.height) * 90) :
      ~~((this.height / this.width) * 75));
  }
  toggleMail() {
    this.mail = !this.mail;
    this.ngOnInit();
  }
}
