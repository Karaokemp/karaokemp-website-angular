import { Component, OnInit } from '@angular/core';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';

@Component({
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  term = 'offspring';
  searchResults = [];
  selectedVideo;

  constructor() { }

  ngOnInit() {
    this.search();
  }

  search() {
    const karaokeTerm = this.term + '+karaoke';
    YTSearch({ key: API_KEY, term: karaokeTerm }, videos => {
      this.searchResults = videos;
      this.selectedVideo = this.searchResults[0];
      });
    }

}
