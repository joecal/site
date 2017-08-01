import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  gridFlex: number;
  fxFlex: number;
  width: number;
  height: number;
  orientation: string;

  constructor(meta: Meta, title: Title, private change: ChangeDetectorRef) {
    title.setTitle('Joe Calvillo Portfolio');

    meta.addTags([
      { name: 'keywords', content: 'Joe Calvillo Portfolio'},
      { name: 'description', content: 'Joe Calvillo Portfolio'}
    ]);
  }
  ngOnInit(event) {
    this.change.markForCheck();
    this.width = window.innerWidth || ~~event.target.innerWidth;
    this.height = window.innerHeight || ~~event.target.innerHeight;
    this.orientation = this.width > this.height ? "landscape" : "portrait";
    this.gridFlex = ~~(this.height / 2);
    this.fxFlex = this.orientation === "portrait" && this.height < 1000  ? ~~((this.width / this.height) * 140) : (this.orientation === "portrait" && this.height > 1000 ? ~~((this.width / this.height) * 90) : ~~((this.height / this.width) * 75));
  }
}
