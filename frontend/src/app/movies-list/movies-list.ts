import { Observable } from 'rxjs';
import { MoviesApi } from '../services/movies-api';
import { Movie } from './../models/movie';
import { Component, DestroyRef, inject } from '@angular/core';
import { AsyncPipe, DatePipe } from '@angular/common';
import { Route, RouterLink } from "@angular/router";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ToastService } from '../services/toast.service';
import { DarkSoulsService } from '../services/dark-souls.service';

@Component({
  selector: 'app-movies-list',
  imports: [AsyncPipe, DatePipe, RouterLink],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.scss',
})
export class MoviesList {
  private readonly moviesApi = inject(MoviesApi);
  private readonly toastService = inject(ToastService);
  private readonly dsService = inject(DarkSoulsService);

  movies: Movie[] = [];
  ngOnInit(): void {
      this.moviesApi.getMovies().subscribe(movies => this.movies = movies);
  }


  private destroyRef = inject(DestroyRef)

  deleteMovie(id: number | undefined): void {
    if (id === undefined) return;

    this.moviesApi.deleteMovie(id).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => {
      this.dsService.show('Le système nous a eu');
      this.movies = this.movies.filter(film => film.id !== id)
    });
  }

}
