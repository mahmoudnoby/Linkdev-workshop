import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/_shared/models/news';
import { SharedService } from 'src/app/_shared/services/shared.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  articles: Article[]
  constructor(private sharedService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.getHomePageNews();
  }

  viewAllNews(): void {
    this.router.navigate(['/news-list'])
  }

  getHomePageNews(): void {
    this.sharedService.getNews().subscribe(res => {
      res.articles.forEach((element :any) => {
        element.category = res.sourceCategory.find(cate => {
          return cate.id === element.sourceID
        })
      });
      this.articles = res.articles.filter(article => article.showOnHomepage == true);
      console.log(this.articles);
    })
  }

  onArticaleClicked(articalObj) {
    this.router.navigate(['/news-list/', articalObj.id])
    this.sharedService.articaleObject.next(articalObj);
  }

}
