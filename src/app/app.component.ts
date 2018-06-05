import { Component } from '@angular/core';
import { MovieService } from './movies/movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MovieService]
})
export class AppComponent {
  pageTitle: string = 'The Movie List Management';
}
