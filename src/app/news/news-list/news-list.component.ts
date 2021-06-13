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
  filteredAricals: Article[];
  categories: SourceCategory[]
  binding: string;
  constructor(private sharedService: SharedService, private router: Router) {
  }

  ngOnInit(): void {
    this.getNewsList();
  }

  viewAllNews(): void {
    this.router.navigate(['/news-list'])
  }

  getNewsList(): void {
    this.sharedService.getNews().subscribe(res => {
      res.articles.forEach((element: any) => {
        element.category = res.sourceCategory.find(cate => {
          return cate.id === element.sourceID
        })
      });
      this.articles = res.articles;
      this.filteredAricals = this.articles;
      this.categories = res.sourceCategory;
    })
  }

  onSelecteCategory(event): void {
    this.filteredAricals = this.articles
    let categoryId = event.target.value
    console.log(categoryId);
    this.filteredAricals = this.filteredAricals.filter( res => {
      return res.sourceID == categoryId
    })
  }

  searchByTitle() {
    if (this.binding !== '') {
      this.filteredAricals = this.articles.filter(articale => {
        return articale.title.toLocaleLowerCase().indexOf(this.binding.toLocaleLowerCase()) !== -1;
      })
    } else {
      this.filteredAricals = this.articles;
    }
  }

  onArticaleClicked(articalObj) {
    this.router.navigate(['/news-list/', articalObj.id])
    this.sharedService.articaleObject.next(articalObj);
  }
}
