import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[growShrink]' })
export class GrowShrinkDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setScale('large');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setScale('small');
  }

  private setScale(scale: string) {
    this.el.nativeElement.scale = scale;
  }

}
