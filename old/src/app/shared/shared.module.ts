import { NgModule } from '@angular/core';
import { GrowShrinkDirective } from './grow.shrink.directive';
import { GreyscaleDirective } from './greyscale.directive'
import { ScrollToDirective } from './scroll.directive'

@NgModule({
  declarations: [
    GrowShrinkDirective,
    GreyscaleDirective,
    ScrollToDirective
  ],
  exports: [
    GrowShrinkDirective,
    GreyscaleDirective,
    ScrollToDirective
  ]
})
export class SharedModule{}
