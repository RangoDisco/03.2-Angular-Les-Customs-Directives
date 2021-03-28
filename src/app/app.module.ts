import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SurvoleDirective } from './survole.directive';
import { DisplayMovieListDirective } from './display-movie-list.directive';

@NgModule({
  declarations: [
    AppComponent,
    SurvoleDirective,
    DisplayMovieListDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
