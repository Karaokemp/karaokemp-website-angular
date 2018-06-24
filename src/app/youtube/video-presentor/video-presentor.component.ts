import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-presentor',
  templateUrl: './video-presentor.component.html',
  styleUrls: ['./video-presentor.component.css']
})
export class VideoPresentorComponent {

  @Input() video;
  url;

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    console.log(this.video);
    if (this.video) {
      this.url = `https://www.youtube.com/watch?v=${this.video.id.videoId}`;
    }
  }

}
