import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({ selector: '[growShrinkState]' })
export class GrowShrinkStateDirective {

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.setState('large');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setState('small');
  }

  private setState(state: string) {
    this.el.nativeElement.state = state;
  }

}
