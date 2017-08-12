import { Component, OnInit, Input, HostListener} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  flexLA:string;
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

    this.flexLA = orientation === "portrait" ? "center" :
      orientation === "landscape" && width < 800 ? "flex-start" :
      orientation === "landscape" && width > 800 ? "center" : null;

    this.pFlex = orientation === "portrait" && height < 1000 ? this.fxFlex + 30:
      orientation === "portrait" && height > 1000 ? this.fxFlex :
      orientation === "landscape" && width < 1000 ? this.fxFlex * 3 :
      orientation === "landscape" && width > 1000 ? this.fxFlex : null;

    this.fontClass = orientation === "portrait" && height < 1000 ? "mat-body-1":
      orientation === "portrait" && height > 1000 ? "mat-headline" :
      orientation === "landscape" && width < 1000 ? "mat-body-1" :
      orientation === "landscape" && width > 1000 ? "mat-headline" : null;
  }
}
