import { Component, Input, Output, EventEmitter, inject } from '@angular/core';
import { Movie } from '../models/movie';
import { MoviesApi } from '../services/movies-api';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-note-movie',
  imports: [FormsModule],
  templateUrl: './note-movie.html',
  styleUrl: './note-movie.scss',
})
export class NoteMovie {
  @Input({ required: true }) movie!: Movie;
  @Output() rated = new EventEmitter<{ note: number, text: string, id: number | null }>();

  private readonly moviesApi = inject(MoviesApi);
  isModalOpen = false;
  selectedNote = 0;
  reviewText = '';
  existingReviewId: number | null = null;

  open() {
    this.isModalOpen = true;
    this.moviesApi.getMovieReviews(this.movie.id!).subscribe(reviews => {
      const myReview = reviews.find(r => r.user.id === 99);
      if (myReview) {
        this.selectedNote = myReview.rate;
        this.reviewText = myReview.text || '';
        this.existingReviewId = myReview.id;
      } else {
        this.selectedNote = Math.round(this.movie.rate || 0);
        this.reviewText = '';
        this.existingReviewId = null;
      }
    });
  }
  close() {
    this.isModalOpen = false;
  }
  confirm() {
    this.rated.emit({ note: this.selectedNote, text: this.reviewText, id: this.existingReviewId });
    this.close();
  }
}
