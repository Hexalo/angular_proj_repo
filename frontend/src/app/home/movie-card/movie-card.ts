import { Movie } from './../../models/movie';
import { Component, Input, inject } from '@angular/core';
import { NoteMovie } from '../../note-movie/note-movie';
import { MoviesApi } from '../../services/movies-api';

@Component({
  selector: 'app-movie-card',
  imports: [NoteMovie],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.scss',
})
export class MovieCard {
  @Input({ required: true }) movie!: Movie;
  private readonly moviesApi = inject(MoviesApi);

  handleRate(event: { note: number, text: string, id: number | null }) {
    if (event.id) {
      this.moviesApi.updateReview(event.id, this.movie.id!, event.note, event.text).subscribe(() => {
        this.refreshMovie();
      });
    } else {
      this.moviesApi.addReview(this.movie.id!, event.note, event.text).subscribe(() => {
        this.refreshMovie();
      });
    }
  }

  private refreshMovie() {
    this.moviesApi.getMovie(this.movie.id!).subscribe((res) => {
      this.movie.rate = res.rate;
    });
  }
}
