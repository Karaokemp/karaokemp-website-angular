import { Component, OnInit } from '@angular/core';
import YTSearch from 'youtube-api-search';
import { KaraokempService } from '../../karaokemp.service';
import { Router } from '@angular/router';



const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';

@Component({
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  term = 'offspring';
  searchResults = [];
  selectedVideo;

  constructor(private backend: KaraokempService, private router: Router) { }

  ngOnInit() {
    this.onVideoUpload.bind(this);
    this.onVideoSelect.bind(this);
    this.search();
  }

  search() {
    const karaokeTerm = this.term + '+karaoke';
    YTSearch({ key: API_KEY, term: karaokeTerm}, videos => {
      this.searchResults = videos;
      this.selectedVideo = this.searchResults[0];
      });
    }

    onVideoUpload() {
      const payload = {title: 'Title', id: this.selectedVideo.id.VideoId};
      // this.backend.upload(payload).subscribe((data) => {
        // console.log(data);
        this.router.navigate(['youtube/uploads']);
        console.log('Not uploading anything.... need to be written!');

      // });

    }

    onVideoSelect(video) {
      this.selectedVideo = video;
    }

}
