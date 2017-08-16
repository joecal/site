import { Directive, Output, OnInit, HostListener, EventEmitter } from '@angular/core';

@Directive({ selector: '[onWindowResize]' })
export class WindowResizeDirective {

  @Output() onWindowResizeEvent = new EventEmitter(true);

  ngOnInit() {
    this.onWindowResize();
  }

  @HostListener("window:resize", [])

  onWindowResize() {
    let width = window.innerWidth;
    let height = window.innerHeight;
    let orientation = width > height ? "landscape" : "portrait";

    let resizeObject = {orientation:orientation};

    this.onWindowResizeEvent.emit(resizeObject);
  }
}
