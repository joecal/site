import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.scss"]
})
export class ContactComponent implements OnInit {
  h1HeaderFontSize: string;
  submitted: boolean = false;

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
    }
  }

  onSubmitted(event) {
    this.submitted = event;
  }
}
