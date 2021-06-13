import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/_shared/models/news';
import { SharedService } from 'src/app/_shared/services/shared.service';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.scss']
})
export class NewsDetailsComponent implements OnInit {
  articalObject: Article
  constructor( private sahredService: SharedService ) { }

  ngOnInit(): void {
    this.sahredService.articaleSubject.subscribe( res => {
      this.articalObject = res;
      console.log(res);
    })
  }

}
