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
    let pFontSize = orientation === "landscape" ? "3.5vh" : "3.5vw";
    let h1FontSize = orientation === "landscape" ? "9vh" : "9vw";
    let h1HeaderFontSize = orientation === "landscape" ? "7vh" : "7vw";
    let iconContainerPad = orientation === "landscape" ? "3em" : "4em";
    let iconFontSize = orientation === "landscape" ? "13vh" : "12.5vw";
    let portraitMaxWidth = orientation === "landscape" ? "20vw" : "20vh";

    let resizeObject = {
      pFontSize:pFontSize,
      h1FontSize:h1FontSize,
      iconFontSize:iconFontSize,
      h1HeaderFontSize:h1HeaderFontSize,
      iconContainerPad:iconContainerPad,
      portraitMaxWidth:portraitMaxWidth
    };

    this.onWindowResizeEvent.emit(resizeObject);
  }
}
