import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './services/services/course.service';
import { FormsModule } from '@angular/forms';
import { SummaryPipe } from './pipe/summary.pipe';
import { FavoriteComponent } from './favorite/favorite/favorite.component';
import { PanelComponent } from './panel/panel/panel.component';
import { AddedDirective } from './directive/added.directive';
import { PostComponent } from './post/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    SummaryPipe,
    FavoriteComponent,
    PanelComponent,
    AddedDirective,
    PostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
