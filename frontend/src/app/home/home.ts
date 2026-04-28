import { Movie } from './../models/movie';
import { Component, inject, signal } from '@angular/core';
import { MoviesApi } from '../services/movies-api';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { MovieCard } from "./movie-card/movie-card";
import {MovieCardTrendy} from "./movie-card-trendy/movie-card-trendy";

@Component({
  selector: 'app-home',
  imports: [AsyncPipe, MovieCard, MovieCardTrendy],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly moviesApi = inject(MoviesApi);
  protected movies$: Observable<Movie[]> = this.moviesApi.getMovies()

  protected currentIndex = 0;
  protected visibleCount = 4;
  protected totalCount = this.visibleCount

  protected getVisibleMovies(movies: Movie[]): Movie[] {
    this.totalCount = movies.length
    if (!movies || movies.length === 0) return [];
    const result: Movie[] = [];
    for (let i = 0; i < this.visibleCount; i++) {
      result.push(movies[(this.currentIndex + i) % this.totalCount]);
    }
    return result;
  }

  protected previous() {
    if (this.currentIndex == 0)
      this.currentIndex = this.totalCount - 1
    else
      this.currentIndex -= 1
  }

  protected next() {
    this.currentIndex = (this.currentIndex + 1) % this.totalCount
  }
}
