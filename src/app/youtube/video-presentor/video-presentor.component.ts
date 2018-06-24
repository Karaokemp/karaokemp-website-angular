import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-video-presentor',
  templateUrl: './video-presentor.component.html',
  styleUrls: ['./video-presentor.component.css']
})
export class VideoPresentorComponent {
  url = `https://www.youtube.com/watch?v=kr8wPkdHFA0`;

  @Input() video;

  constructor() { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    console.log(this.video);
  }

}
