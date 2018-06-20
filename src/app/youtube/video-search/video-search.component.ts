import { Component, OnInit } from '@angular/core';
import YTSearch from 'youtube-api-search';


const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';

@Component({
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  videoId = '7iNbnineUCI'; // offspring
  term = '';
  searchResults;

  constructor() { }

  ngOnInit() {}

  search() {
    YTSearch({ key: API_KEY, term: this.term }, videos => {
      this.searchResults = videos;
      });
    }

}
