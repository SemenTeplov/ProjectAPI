import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlPopArticls = "https://newsapi.org/v2/everything?q=politics&language=ru&sortBy=popularity&apiKey=9fa7fc8d64fe44c18cdbe8cc10085805";
  private urlSportArticls = "https://newsapi.org/v2/everything?q=sport&language=ru&sortBy=popularity&apiKey=9fa7fc8d64fe44c18cdbe8cc10085805";

  constructor(private httpClient : HttpClient) { }

  getPopArticls() {
    return this.httpClient.get(this.urlPopArticls);
  }
  getSportArticls() {
    return this.httpClient.get(this.urlSportArticls);
  }
}
