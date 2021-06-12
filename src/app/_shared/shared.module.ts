import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { UpperNavComponent } from './upper-nav/upper-nav.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    FooterComponent,
    UpperNavComponent,
    HeaderComponent
  ],
  imports: [
  CommonModule,
    RouterModule.forChild([]),

  ],
  exports: [
    HeaderComponent,
    UpperNavComponent,
    FooterComponent
  ]
})
export class SharedModule { }
