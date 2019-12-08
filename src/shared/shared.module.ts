import { NgModule } from "@angular/core";

import { MaterialModule } from "./material.module";
import { GrowShrinkDirective } from "./grow.shrink.directive";
import { GreyscaleDirective } from "./greyscale.directive";
import { ScrollToDirective } from "./scroll.directive";

@NgModule({
  imports: [MaterialModule],
  declarations: [GrowShrinkDirective, GreyscaleDirective, ScrollToDirective],
  exports: [
    MaterialModule,
    GrowShrinkDirective,
    GreyscaleDirective,
    ScrollToDirective
  ],
  providers: []
})
export class SharedModule {}
