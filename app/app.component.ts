import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

const apiUrl: string =
  'https://api.themoviedb.org/3/discover/movie?api_key=c184049fa985e945fdaf57275d45853e&sort_by=popularity.desc';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'movieApp';
  list: any;
  page = 1;
  count = 0;
  movieSize = 8;

  constructor(private http: HttpClient) {}

  getMovies() {
    this.http.get(apiUrl).subscribe((data: any) => {
      console.log(data);
      this.list = data.results;
    });
  }

  onMovieDataChange(event) {
    this.page = event;
    this.getMovies();
  }

  ngOnInit() {
    this.getMovies();
  }
}
