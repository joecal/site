import { NgModule } from '@angular/core';
import { GrowShrinkStateDirective } from './grow.shrink.state.directive';
import { WindowResizeDirective } from './window.resize.directive';

@NgModule({
  declarations: [
    GrowShrinkStateDirective,
    WindowResizeDirective
  ],
  exports: [
    GrowShrinkStateDirective,
    WindowResizeDirective
  ]
})
export class SharedModule{}
