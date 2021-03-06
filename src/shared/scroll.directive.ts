import {
  Directive,
  Input,
  HostListener,
  Inject,
  PLATFORM_ID
} from "@angular/core";
import { isPlatformBrowser } from "@angular/common";

@Directive({ selector: "[appScrollTo]" })
export class ScrollToDirective {
  @Input() elementId: string;

  @HostListener("click") onClick() {
    this.scrollTo(this.elementId);
  }

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  private scrollTo(elId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(elId);
      const startY = this.currentYPosition();
      const stopY = this.elmYPosition(element);
      const distance = stopY > startY ? stopY - startY : startY - stopY;
      if (distance < 100) {
        scrollTo(0, stopY);
        return;
      }
      const speed = 25;
      const step = Math.round(distance / 25);
      let leapY = stopY > startY ? startY + step : startY - step;
      let timer = 0;
      if (stopY > startY) {
        for (let i = startY; i < stopY; i += step) {
          setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
          leapY += step;
          if (leapY > stopY) {
            leapY = stopY;
          }
          timer++;
        }
        return;
      }
      for (let i = startY; i > stopY; i -= step) {
        setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
        leapY -= step;
        if (leapY < stopY) {
          leapY = stopY;
        }
        timer++;
      }
    }
  }

  private currentYPosition() {
    if (isPlatformBrowser(this.platformId)) {
      // Firefox, Chrome, Opera, Safari
      if (self.pageYOffset) {
        return self.pageYOffset;
      }
      // Internet Explorer 6 - standards mode
      if (document.documentElement && document.documentElement.scrollTop) {
        return document.documentElement.scrollTop;
      }
      // Internet Explorer 6, 7 and 8
      if (document.body.scrollTop) {
        return document.body.scrollTop;
      }
      return 0;
    }
  }

  private elmYPosition(el: HTMLElement) {
    if (isPlatformBrowser(this.platformId)) {
      const elm = el;
      let y = elm.offsetTop;
      let node: any = elm;
      while (node.offsetParent && node.offsetParent !== document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
      }
      return y;
    }
  }
}
