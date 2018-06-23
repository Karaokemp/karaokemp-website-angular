import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-search-result',
  templateUrl: './video-search-result.component.html',
  styleUrls: ['./video-search-result.component.css']
})
export class VideoSearchResultComponent implements OnInit {

  @Input() video;

  constructor() { }

  ngOnInit() {
    console.log(this.video);
  }

}
