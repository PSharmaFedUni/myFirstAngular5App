import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit  {
  pageTitle: string = 'Movie List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter: string;
  errorMessage: string;
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  filteredMovies: IMovie[];
  movies: IMovie[]= [];
  constructor(private _movieService:MovieService){
     
  }
//   onRatingClicked(message: string): void {
//     this.pageTitle = 'Movie List: ' + message;
// }
  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
          movie.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void{
     this._movieService.getMovies().subscribe(movies => 
        {   this.movies = movies;
            this.filteredMovies = this.movies;
        },
         error => this.errorMessage = <any>error);
     
  }
  

}
