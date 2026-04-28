import { Injectable, signal } from '@angular/core';

export interface Toast {
  message: string;
  type: 'success' | 'danger' | 'info';
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {
  toasts = signal<Toast[]>([]);

  show(message: string, type: 'success' | 'danger' | 'info' = 'success') {
    this.toasts.update(t => [...t, { message, type }]);
    setTimeout(() => this.remove(), 3000);
  }

  remove() {
    this.toasts.update(t => t.slice(1));
  }
}
