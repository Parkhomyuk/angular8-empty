import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KonvaModule } from "ng2-konva";
import { CanvasComponent } from './canvas/canvas.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { StudyComponent } from './study/study.component';
import { TodoComponent } from './todo/todo.component';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieDetailComponent } from './movies-page/movie-detail/movie-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { KayComponent } from './kay/kay.component';
import { CalendarComponent } from './calendar/calendar.component';
@NgModule({
  declarations: [
    AppComponent,
    CanvasComponent,
    LoginPageComponent,
    StudyComponent,
    TodoComponent,
    MoviesPageComponent,
    MovieDetailComponent,
    KayComponent,
    CalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    KonvaModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
