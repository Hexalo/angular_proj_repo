import { UpdateMovie } from './../update-movie/update-movie';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root',
})
export class MoviesApi {
  private readonly httpClient = inject(HttpClient);
  private readonly url = "http://localhost:8081/movies"

  getMovies(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.url);
  }

  getMovieReviews(movieId: number): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/${movieId}/reviews`);
  }

  getMovie(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(`${this.url}/${id}`);
  }

  updateMovie(movie: Movie): Observable<Movie> {
    if (movie.id === undefined) {
      throw new Error("Movie ID is required for update");
    }
    return this.httpClient.put<Movie>(`${this.url}/${movie.id}`, movie);
  }

  addMovie(movie: Movie): Observable<Movie> {
    return this.httpClient.post<Movie>(this.url, movie);
  }

  deleteMovie(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.url}/${id}`);
  }

  addReview(movieId: number, rate: number, text: string): Observable<any> {
    const review = {
      movie: { id: movieId },
      user: { id: 99 },
      rate: rate,
      text: text,
      reviewDate: new Date()
    };
    return this.httpClient.post("http://localhost:8081/reviews", review);
  }

  updateReview(reviewId: number, movieId: number, rate: number, text: string): Observable<any> {
    const review = {
      id: reviewId,
      movie: { id: movieId },
      user: { id: 99 },
      rate: rate,
      text: text,
      reviewDate: new Date()
    };
    return this.httpClient.put(`http://localhost:8081/reviews/${reviewId}`, review);
  }

}
