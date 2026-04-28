import { Component, inject } from '@angular/core';
import { DarkSoulsService } from '../services/dark-souls.service';

@Component({
  selector: 'app-dark-souls-overlay',
  standalone: true,
  templateUrl: './dark-souls-overlay.html',
  styleUrl: './dark-souls-overlay.scss'
})
export class DarkSoulsOverlay {
  protected readonly dsService = inject(DarkSoulsService);
}
