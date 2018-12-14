import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { YoutubeComponent } from './youtube/youtube.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AboutComponent } from './about/about.component';
import { PerformancesComponent } from './performances/performances.component';
import { NavBarItemComponent } from './nav-bar-item/nav-bar-item.component';
import { AppRoutingModule } from './app-routing.module';
import { VideoSearchComponent } from './youtube/video-search/video-search.component';
import { UploadListComponent } from './youtube/upload-list/upload-list.component';
import { YoutubeRoutingModule } from './youtube/youtube-routing/youtube-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { VideoPlayerComponent } from './youtube/video-player/video-player.component';
import { VideoPresentorComponent } from './youtube/video-presentor/video-presentor.component';
import { UploadListItemComponent } from './youtube/upload-list-item/upload-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YoutubeComponent,
    PageNotFoundComponent,
    NavBarComponent,
    StatisticsComponent,
    AboutComponent,
    PerformancesComponent,
    NavBarItemComponent,
    VideoSearchComponent,
    UploadListComponent,
    VideoPlayerComponent,
    VideoPresentorComponent,
    UploadListItemComponent
  ],
  imports: [
    FormsModule,
    YoutubeRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
