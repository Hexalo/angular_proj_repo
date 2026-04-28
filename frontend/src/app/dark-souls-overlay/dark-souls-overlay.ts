import { Component, inject } from '@angular/core';
import { DarkSoulsService } from '../services/dark-souls.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-dark-souls-overlay',
  standalone: true,
  template: `
    @if (dsService.active()) {
      <div class="ds-overlay" [@overlayAnimation]>
        <div class="ds-banner">
          <h1 class="ds-text">{{ dsService.message() }}</h1>
        </div>
      </div>
    }
  `,
  styles: [`
    .ds-overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 9999;
      background: rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }
    .ds-banner {
      width: 100%;
      background: rgba(0, 0, 0, 0.6);
      padding: 20px 0;
      display: flex;
      justify-content: center;
      border-top: 2px solid rgba(139, 0, 0, 0.5);
      border-bottom: 2px solid rgba(139, 0, 0, 0.5);
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.8);
    }
    .ds-text {
      color: #b30000;
      font-family: 'Times New Roman', serif;
      font-size: 5rem;
      letter-spacing: 0.5rem;
      text-transform: uppercase;
      margin: 0;
      text-shadow: 0 0 10px rgba(0, 0, 0, 0.8), 2px 2px 2px rgba(0, 0, 0, 0.5);
      filter: brightness(1.2);
    }
  `],
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
