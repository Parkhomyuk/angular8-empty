import { Component, OnInit } from '@angular/core';
import {MoviesService} from '../service/movies.service';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies:any[];  
  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(data=>{
      this.movies=data['data'][0];
      console.log('this.movies', this.movies);
    })
  }

  sortByRating(){
    this.movies.sort((a,b)  => (a.IMDB_Rating > b.IMDB_Rating)? 1: -1);
            
  }
  sortByRating2(){
    this.movies.sort((a,b)  => (a.IMDB_Rating < b.IMDB_Rating)? 1: -1);
            
  }

}
