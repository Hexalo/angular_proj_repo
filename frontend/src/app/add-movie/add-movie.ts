import { Component, inject } from '@angular/core';
import { Movie } from '../models/movie';
import { FormsModule } from '@angular/forms';
import { MoviesApi } from '../services/movies-api';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-add-movie',
  imports: [FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.scss',
})
export class AddMovie {

  private readonly router = inject(Router);
  private readonly moviesApi = inject(MoviesApi);
  private readonly toastService = inject(ToastService);

  addMovie(): void {
    this.moviesApi.addMovie(this.movie).subscribe(
        () => {
          this.toastService.show('Nouveau film ajouté !');
          this.router.navigate(['/movies']);
        }
    );
  }

  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
    id: undefined,
    rate: undefined,
    image: undefined
  }

}
