import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const greyscale = trigger("greyscale", [
  state(
    "color",
    style({
      "-webkit-filter": "grayscale(0%)",
      filter: "grayscale(0%)"
    })
  ),
  state(
    "grey",
    style({
      "-webkit-filter": "grayscale(100%)",
      filter: "grayscale(100%)"
    })
  ),
  transition("* => *", animate("200ms ease-in-out"))
]);
