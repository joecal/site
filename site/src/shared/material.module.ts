import { NgModule } from "@angular/core";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  imports: [
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ],
  exports: [
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule
  ]
})
export class MaterialModule {}
