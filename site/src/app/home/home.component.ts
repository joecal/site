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
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [growShrink]
})
export class HomeComponent implements OnInit {
  h1FontSize: string;

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

      this.h1FontSize = orientation === "landscape" ? "7vh" : "7vw";
    }
  }
}
