import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkSoulsService {
  active = signal(false);
  message = signal('');

  show(message: string) {
    this.message.set(message);
    this.active.set(true);
    setTimeout(() => this.active.set(false), 4000);
  }
}
