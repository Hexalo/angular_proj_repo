import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss'
})
export class ToastContainer {
  protected readonly toastService = inject(ToastService);
}
