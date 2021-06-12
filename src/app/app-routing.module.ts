import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {
      path:'',
      loadChildren: () => import('./news/news.module')
      .then( m => m.NewsModule ), data:{}
    },
    {path:"**", redirectTo:'', pathMatch:"full"},

  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
