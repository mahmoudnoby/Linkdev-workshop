import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from 'rxjs';
import { Article, News } from "../models/news";

@Injectable({
    providedIn: 'root'
})

export class SharedService {
    private categoryIdSource = new BehaviorSubject<number>(3);
    currentCat_id = this.categoryIdSource.asObservable();
    constructor(private http: HttpClient) {}

    changeCatId(id: number) {
        this.categoryIdSource.next(id);
    }


    getNews(){
      return this.http.get<News>('assets/newsapi.json')
    }
}
