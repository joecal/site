import {
  trigger,
  state,
  style,
  transition,
  animate
} from "@angular/animations";

export const growShrink = trigger("growShrink", [
  state(
    "small",
    style({
      transform: "scale(1)"
    })
  ),
  state(
    "large",
    style({
      transform: "scale(1.1)",
      "text-shadow": "0 5px 10px #ccc"
    })
  ),
  transition("* => *", animate("200ms ease-in-out"))
]);
