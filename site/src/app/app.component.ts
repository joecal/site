import {
  Component,
  OnInit,
  AfterViewInit,
  Inject,
  PLATFORM_ID,
  HostListener,
  ViewChildren,
  ElementRef,
  QueryList
} from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";
import { Meta, Title } from "@angular/platform-browser";
import { isPlatformBrowser } from "@angular/common";
import * as Trianglify from "trianglify";

@Component({
  selector: "app-root",
  animations: [
    trigger("opacity", [
      state("show", style({ opacity: 1 })),
      transition("* => *", animate("2s ease-in-out"))
    ])
  ],
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChildren("home,about,skills,work,contact") children: QueryList<
    ElementRef
  >;
  opacity: string;
  homeOpacity: number;
  aboutOpacity: number;
  skillsOpacity: number;
  workOpacity: number;
  contactOpacity: number;

  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    meta: Meta,
    title: Title
  ) {
    title.setTitle("Joe Calvillo Portfolio");

    meta.addTags([
      { name: "keywords", content: "Joe Calvillo Portfolio" },
      { name: "description", content: "Joe Calvillo Portfolio" }
    ]);
  }

  ngOnInit() {
    // this.onWindowResize(); // TODO
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const pattern = Trianglify({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        variance: "1",
        cell_size: 200,
        seed: "muzbg",
        x_colors: [
          "#ffffff",
          "#ffffff",
          "#fdfdfd",
          "#fcfcfc",
          "#fbfbfb",
          "#fcfcfc",
          "#fdfdfd",
          "#ffffff",
          "#ffffff"
        ],
        y_colors: "match_x",
        color_space: "rgb"
      });

      document.body.style["background-image"] = "url(" + pattern.png() + ")";

      setTimeout(() => {
        this.opacity = "show";
      }, 0);
    }
  }

  @HostListener("window:resize", [])
  onWindowResize() {
    if (isPlatformBrowser(this.platformId)) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const orientation = width > height ? "landscape" : "portrait";
    }
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (isPlatformBrowser(this.platformId)) {
      this.homeOpacity = this.setOpacity(null, "home");
      this.aboutOpacity = this.setOpacity("skills", "about");
      this.skillsOpacity = this.setOpacity("work", "skills");
      this.workOpacity = this.setOpacity("contact", "work");
      this.contactOpacity = this.setOpacity(null, "contact");
    }
  }

  private getElements() {
    const childrenList = this.children.toArray();
    const homeElement = childrenList[0].nativeElement;
    const aboutElement = childrenList[1].nativeElement;
    const skillsElement = childrenList[2].nativeElement;
    const workElement = childrenList[3].nativeElement;
    const contactElement = childrenList[4].nativeElement;

    return {
      home: homeElement,
      about: aboutElement,
      skills: skillsElement,
      work: workElement,
      contact: contactElement
    };
  }

  private inView(element: HTMLElement) {
    if (isPlatformBrowser(this.platformId)) {
      const top = element.offsetTop;
      return top < window.pageYOffset + window.innerHeight;
    }
  }

  private setOpacity(elementName1: string, elementName2: string) {
    if (isPlatformBrowser(this.platformId)) {
      let height = window.innerHeight;
      const width = window.innerWidth;
      const scrollTop =
        window.pageYOffset !== undefined
          ? window.pageYOffset
          : document.documentElement.scrollTop || document.body.scrollTop;
      height = height / 3;
      const value =
        elementName2 === "home"
          ? (height - scrollTop) / height
          : elementName2 === "contact"
          ? -(height - (scrollTop - this.getElements().contact.offsetTop)) /
              height +
            3
          : this.inView(this.getElements()[elementName1])
          ? (height -
              (scrollTop - this.getElements()[elementName2].offsetTop)) /
            height
          : -(
              height -
              (scrollTop - this.getElements()[elementName2].offsetTop)
            ) /
              height +
            3;
      return value;
    }
  }
}
