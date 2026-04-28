import { Component, inject } from '@angular/core';
import { DarkSoulsService } from '../services/dark-souls.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dark-souls-overlay',
  standalone: true,
  templateUrl: './dark-souls-overlay.html',
  styleUrl: './dark-souls-overlay.scss',
  animations: [
    trigger('overlayAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(1.2)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'scale(1)' })),
      ]),
      transition(':leave', [
        animate('1500ms ease-in', style({ opacity: 0 }))
      ])
    ])
  ]
})
export class DarkSoulsOverlay {
  protected readonly dsService = inject(DarkSoulsService);
}
