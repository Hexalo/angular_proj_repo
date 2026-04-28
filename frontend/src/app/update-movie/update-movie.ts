import { MoviesApi } from './../services/movies-api';
import { Movie } from './../models/movie';
import { Component, inject, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-update-movie',
  imports: [FormsModule, DatePipe],
  templateUrl: './update-movie.html',
  styleUrl: './update-movie.scss',
})
export class UpdateMovie implements OnInit {
  id: number | undefined;

  private readonly router = inject(Router);
  private readonly moviesApi = inject(MoviesApi);
  private readonly route = inject(ActivatedRoute);


  movie: Movie = {
    title: '',
    director: '',
    releaseDate: new Date(),
    synopsis: '',
  };

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');

    this.id = idParam ? Number(idParam) : undefined;

    if (this.id !== undefined) {
      this.moviesApi.getMovie(this.id).subscribe(movie => this.movie = movie);
    }

  }

  updateMovie(): void {
    if (this.id === undefined) return;

    this.moviesApi.updateMovie(this.movie).subscribe(
        () => console.log('Movie updated successfully')
    );

    this.router.navigate(['/movies']);
  }
}
