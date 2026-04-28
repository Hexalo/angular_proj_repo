import {Component, Input} from '@angular/core';
import {Movie} from "../../models/movie";

@Component({
  selector: 'app-movie-card-trendy',
  imports: [],
  templateUrl: './movie-card-trendy.html',
  styleUrl: './movie-card-trendy.scss',
})
export class MovieCardTrendy {
  @Input({ required: true }) movie! : Movie;
}
