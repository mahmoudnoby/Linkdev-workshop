import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article, SourceCategory } from 'src/app/_shared/models/news';
import { SharedService } from 'src/app/_shared/services/shared.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {

  articles: Article[]
  categories: SourceCategory[]
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getNewsList();
  }

  viewAllNews(): void {
    this.router.navigate(['/news-list'])
  }

  getNewsList(): void {
    this.sharedService.getNews().subscribe(res => {
      this.articles = res.articles;
      this.categories = res.sourceCategory;
      console.log(this.articles);
    })

  }

  onSelecteCategory(category): void {

  }
}
