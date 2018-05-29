import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';

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
  get listFilter(): string {
      return this._listFilter;
  }
  set listFilter(value: string) {
      this._listFilter = value;
      this.filteredMovies = this.listFilter ? this.performFilter(this.listFilter) : this.movies;
  }
  filteredMovies: IMovie[];
  movies: IMovie[]= [
    {
      "Title": "Star Wars: Episode IV - A New Hope",
      "Year": "1977",
      "ID": "fw0076759",
      "Rating": "4.5",
      "Price": "28.789",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BOTIyMDY2NGQtOGJjNi00OTk4LWFhMDgtYmE3M2NiYzM0YTVmXkEyXkFqcGdeQXVyNTU1NTfwOTk@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode V - The Empire Strikes Back",
      "Year": "1980",
      "ID": "fw0080684",
      "Rating": "3.3",
      "Price": "28.789",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjE2MzQwMTgxN15BMl5BanBnXkFtZTfwMDQzNjk2OQ@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode VI - Return of the Jedi",
      "Year": "1983",
      "ID": "fw0086190",
      "Rating": "3.7",
      "Price": "28.789",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ0MzI1NjYwOF5BMl5BanBnXkFtZTgwODU3NDU2MTE@._V1._CR93,97,1209,1861_SX89_AL_.jpg_V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode I - The Phantom Menace",
      "Year": "1999",
      "ID": "fw0120915",
      "Rating": "3.2",
      "Price": "28.789",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTQ4NjEwNDA2Nl5BMl5BanBnXkFtZTfwNDUyNDQzNw@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode III - Revenge of the Sith",
      "Year": "2005",
      "ID": "fw0121766",
      "Rating": "4.3",
      "Price": "28.789",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTfwOTg0NjI4NA@@._V1_SX300.jpg"
  },
  {
      "Title": "Star Wars: Episode II - Attack of the Clones",
      "Year": "2002",
      "ID": "fw0121765",
      "Rating": "4.8",
      "Price": "28.789",
      "Type": "movie",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTY5MjI5NTIwNl5BMl5BanBnXkFtZTYwMTM1Njg2._V1_SX300.jpg"
  }

  ];
  constructor(){
      this.filteredMovies = this.movies;
      this.listFilter = '';
  }
  onRatingClicked(message: string): void {
    this.pageTitle = 'Movie List: ' + message;
}
  performFilter(filterBy: string): IMovie[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter((movie: IMovie) =>
          movie.Title.toLocaleLowerCase().indexOf(filterBy) !== -1);
}
  toggleImage(): void {
    this.showImage = !this.showImage;
  }
  ngOnInit(): void{
      console.log('In OnInit')
  }
  

}
