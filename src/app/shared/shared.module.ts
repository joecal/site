import { NgModule } from '@angular/core';
import { GrowShrinkStateDirective } from './grow.shrink.state.directive';

@NgModule({
    declarations: [
        GrowShrinkStateDirective
    ],
    exports: [
        GrowShrinkStateDirective
    ]
})
export class SharedModule{}
