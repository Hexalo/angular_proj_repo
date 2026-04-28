import { Movie } from './../models/movie';
import { Component, inject } from '@angular/core';
import { MoviesApi } from '../services/movies-api';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MovieCard } from "./movie-card/movie-card";

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, DatePipe, MovieCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly moviesApi = inject(MoviesApi);
  protected movies$: Observable<Movie[]> = this.moviesApi.getMovies()
}
