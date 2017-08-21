import { NgModule } from '@angular/core';
import { GrowShrinkDirective } from './grow.shrink.directive';
import { GreyscaleDirective } from './greyscale.directive'

@NgModule({
  declarations: [
    GrowShrinkDirective,
    GreyscaleDirective
  ],
  exports: [
    GrowShrinkDirective,
    GreyscaleDirective
  ]
})
export class SharedModule{}
