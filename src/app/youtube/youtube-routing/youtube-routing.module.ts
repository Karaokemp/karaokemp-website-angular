import { NgModule } from '@angular/core';
import { YoutubeComponent } from '../youtube.component';
import {UploadListComponent} from '../upload-list/upload-list.component';
import {VideoSearchComponent} from '../video-search/video-search.component';
import { RouterModule, Routes } from '@angular/router';



const youtubeRoutes: Routes = [
  {
    path: 'youtube',
    component: YoutubeComponent,
    children: [
      {
        path: 'uploads',
        component: UploadListComponent,
      },
      {
        path: 'search',
        component: VideoSearchComponent,
      },
      {
        path: '',
        component: VideoSearchComponent,
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(youtubeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class YoutubeRoutingModule { }
