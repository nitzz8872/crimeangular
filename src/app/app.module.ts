import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import {HttpClientModule} from '@angular/common/http';
import { MissingPeopleComponent } from './missing-people/missing-people.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FeedbackComponent } from './feedback/feedback.component'


const routes:Routes=[
  {path:'news-component' , component:NewsComponent},
  {path:'missing-people-component',component:MissingPeopleComponent},
  {path:'aboutus-component',component:AboutUsComponent},
  {path:'feedback-component',component:FeedbackComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
  
    MissingPeopleComponent,
    AboutUsComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
