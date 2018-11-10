import { Component, OnInit } from '@angular/core';
import YTSearch from 'youtube-api-search';
import { KaraokempService } from '../../karaokemp.service';
import { Router } from '@angular/router';




const SEARCH_INTERVAL = 3;
const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';

@Component({
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  term = '';
  searchResults = [];
  selectedVideo;

  constructor(private backend: KaraokempService, private router: Router) { }

  ngOnInit() {
    this.onVideoUpload.bind(this);
    this.onVideoSelect.bind(this);
    this.search();
  }

  search() {

    const karaokeWord = this.defineKaraokeWord();

    const karaokeTerm = `${this.term} +${karaokeWord}`;
    YTSearch({ key: API_KEY, term: karaokeTerm}, videos => {
      this.searchResults = videos;
      this.selectedVideo = this.searchResults[0];
      });
    }
  defineKaraokeWord(): string {
    var str = this.term[0];
var position = str.search(/[\u0590-\u05FF]/);
if(position >= 0){

  return 'קריוקי';
  }else{
    return 'karaoke';
  }

}
    onTermChange() {
      this.search();
    }

    private on


    onVideoUpload() {
      const payload = {title: this.selectedVideo.snippet.title, id: this.selectedVideo.id.videoId};
       this.backend.upload(payload).subscribe(() => {
       this.router.navigate(['youtube/uploads']);

       }, (error) => {
         console.error(error);
       });

    }

    onVideoSelect(video) {
      this.selectedVideo = video;
    }

}
