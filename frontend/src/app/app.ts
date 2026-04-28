import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Home } from "./home/home";
import { ToastContainer } from './toast-container/toast-container';
import { DarkSoulsOverlay } from './dark-souls-overlay/dark-souls-overlay';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Home, ToastContainer, DarkSoulsOverlay],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
