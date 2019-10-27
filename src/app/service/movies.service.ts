import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  _url="assets/data/data.json";
  constructor(private httpClient: HttpClient) { }

 getMovies(){
    console.log('service ', this.httpClient.get(this._url));
    return this.httpClient.get(this._url);
  }
}
