import { Component, inject } from '@angular/core';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';
import { MoviesApi } from '../services/movies-api';
import { Router } from '@angular/router';
import { ReactiveFormsModule, FormControl, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ToastService } from '../services/toast.service';
import { confetti } from "@tsparticles/confetti";

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss',
})
export class AddMovie {

  private readonly router = inject(Router);
  private readonly moviesApi = inject(MoviesApi);
  private readonly toastService = inject(ToastService);

  title = new FormControl('', [Validators.required, Validators.pattern(/^[A-Z0-9\s]*$/)]);
  director = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z-]+\s[a-zA-Z-]+$/)]);
  releaseDate = new FormControl('', [Validators.required, this.verifDate]);
  synopsis = new FormControl('', [Validators.required, Validators.minLength(30)]);

  addMovie(): void {
    const movie: Movie = {
      title: this.title.value ?? '',
      director: this.director.value ?? '',
      releaseDate: new Date(this.releaseDate.value ?? ''),
      synopsis: this.synopsis.value ?? '',
      id: undefined,
      rate: undefined,
      image: undefined
    }

    this.moviesApi.addMovie(movie).subscribe(
        () => {
          this.toastService.show('Nouveau film ajouté !');
          this.router.navigate(['/movies']);
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
          });
        }
    );
  }

  verifDate(control: AbstractControl): ValidationErrors | null {
    const selectedDate = new Date(control.value);
    const today = new Date();
    selectedDate.setHours(0, 0, 0, 0);
    if (selectedDate > today) {
      return { futureDate: true };
    }
    return null;
  }

}
