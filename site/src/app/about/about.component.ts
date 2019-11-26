import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent implements OnInit {
  h1HeaderFontSize: string;
  pFontSize: string;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      let width = window.innerWidth;
      let height = window.innerHeight;
      let orientation = width > height ? "landscape" : "portrait";

      this.h1HeaderFontSize = orientation === "landscape" ? "6vh" : "6vw";
      this.pFontSize = orientation === "landscape" ? "3.5vh" : "3.5vw";
    }
  }
}
