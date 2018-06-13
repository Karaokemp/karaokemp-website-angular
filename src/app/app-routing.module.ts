import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
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
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [ RouterModule ]

})
export class AppRoutingModule { }
