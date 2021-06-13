import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Article, News } from "../models/news";

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    articaleObject = new BehaviorSubject<any>("Subject triggered");
    articaleSubject = this.articaleObject.asObservable();
    constructor(private http: HttpClient) {}


    getNews(){
      return this.http.get<News>('assets/newsapi.json')
    }
}
