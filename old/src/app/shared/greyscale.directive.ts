import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[greyscale]' })
export class GreyscaleDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setGreyscale('color');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setGreyscale('grey');
  }

  private setGreyscale(greyscale: string) {
    this.el.nativeElement.greyscale = greyscale;
  }

}
