import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailsComponent } from './news-details/news-details.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


const routes = [
  {path: '', component: HomePageComponent },
  {path: 'home', component: HomePageComponent },
  {path: 'news-list', component: NewsListComponent },
  {path: 'news-list/:id', component: NewsDetailsComponent },
]
@NgModule({
  declarations: [HomePageComponent, NewsListComponent, NewsDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class NewsModule { }
