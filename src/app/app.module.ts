import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';
import { PerformancesComponent } from './performances/performances.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'youtube', component: YoutubeComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'performances', component: PerformancesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    StatisticsComponent,
    AboutComponent,
    PerformancesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
