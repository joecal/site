import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { growShrink } from "src/shared/grow.shrink";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"],
  animations: [growShrink]
})
export class AboutComponent implements OnInit {
  h1HeaderFontSize: string;
  portraitMaxWidth: string;
  pFontSize: string;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? "landscape" : "portrait";

      this.h1HeaderFontSize = orientation === "landscape" ? "6vh" : "6vw";
      this.portraitMaxWidth = orientation === "landscape" ? "20vw" : "20vh";
      this.pFontSize = orientation === "landscape" ? "3.5vh" : "3.5vw";
    }
  }
}
