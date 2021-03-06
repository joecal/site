import {
  Component,
  Inject,
  PLATFORM_ID,
  OnInit,
  HostListener
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";
import { growShrink } from "src/shared/grow.shrink";
import { greyscale } from "src/shared/greyscale";

@Component({
  selector: "app-skills",
  templateUrl: "./skills.component.html",
  styleUrls: ["./skills.component.scss"],
  animations: [growShrink, greyscale]
})
export class SkillsComponent implements OnInit {
  h1HeaderFontSize: string;
  iconFontSize: string;

  icons: any = [
    "devicon-angularjs-plain colored",
    "devicon-android-plain-wordmark colored",
    "devicon-amazonwebservices-plain-wordmark colored",
    "devicon-apple-original colored",
    "devicon-atom-original-wordmark colored",
    "devicon-bitbucket-plain-wordmark colored",
    "devicon-bootstrap-plain-wordmark colored",
    "devicon-chrome-plain-wordmark colored",
    "devicon-confluence-plain-wordmark colored",
    "devicon-css3-plain-wordmark colored",
    "devicon-express-original-wordmark colored",
    "devicon-firefox-plain-wordmark colored",
    "devicon-git-plain-wordmark colored",
    "devicon-github-plain-wordmark colored",
    "devicon-google-plain-wordmark colored",
    "devicon-heroku-original-wordmark colored",
    "devicon-html5-plain-wordmark colored",
    "devicon-javascript-plain colored",
    "devicon-jquery-plain-wordmark colored",
    "devicon-less-plain-wordmark colored",
    "devicon-linux-plain colored",
    "devicon-mongodb-plain-wordmark colored",
    "devicon-nginx-original colored",
    "devicon-nodejs-plain-wordmark colored",
    "devicon-nodewebkit-plain-wordmark colored",
    "devicon-photoshop-line colored",
    "devicon-postgresql-plain-wordmark colored",
    "devicon-python-plain-wordmark colored",
    "devicon-react-original-wordmark colored",
    "devicon-sass-original colored",
    "devicon-slack-plain-wordmark colored",
    "devicon-ssh-plain-wordmark colored",
    "devicon-typescript-plain colored",
    "devicon-ubuntu-plain-wordmark colored",
    "devicon-visualstudio-plain-wordmark"
  ];

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
      this.iconFontSize = orientation === "landscape" ? "11vh" : "11vw";
    }
  }
}
