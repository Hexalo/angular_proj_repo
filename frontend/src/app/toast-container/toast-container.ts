import { Component, inject } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { NgClass, NgForOf } from '@angular/common';

@Component({
  selector: 'app-toast-container',
  standalone: true,
  imports: [NgClass, NgForOf],
  templateUrl: './toast-container.html',
  styleUrl: './toast-container.scss'
})
export class ToastContainer {
  protected readonly toastService = inject(ToastService);
}
