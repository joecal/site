import { Component, OnInit, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  fontClass:string;
  pFlex:number;

  ngOnInit() {
    this.onWindowResize()
  }

  @Input('flex') fxFlex:number;

  @HostListener("window:resize", [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    this.fxFlex = this.fxFlex;

    this.pFlex = orientation === "portrait" && height < 1000 ? this.fxFlex + 30:
      orientation === "portrait" && height > 1000 ? this.fxFlex :
      orientation === "landscape" && width < 1000 ? this.fxFlex * 3 :
      orientation === "landscape" && width > 1000 ? this.fxFlex : null;

      this.fontClass = orientation === "portrait" && height < 1000 ? "mat-body-1":
        orientation === "portrait" && height > 1000 ? "mat-headline" :
        orientation === "landscape" && width < 1000 ? "mat-body-1" :
        orientation === "landscape" && width > 1000 ? "mat-headline" : null;
    // this.fontClass = this.fxFlex < 100 ? "mat-caption" : "mat-body";
  }
}
