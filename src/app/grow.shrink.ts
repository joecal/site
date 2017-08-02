import { trigger, state, style, transition, animate } from '@angular/animations';

export const growShrink = trigger('growShrink', [
  state('small', style({
    transform: 'scale(1)',
  })),
  state('large', style({
    transform: 'scale(1.1)',
  })),
  state('out',   style({
    transform: 'translateX(-100%)',
  })),
  transition('* => *', animate('200ms ease-in-out'))
]);
