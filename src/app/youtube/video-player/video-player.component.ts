import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';


@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent {

  @Input() video;
  trustedUrl: SafeUrl;
  constructor(private sanitizer: DomSanitizer) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
  const url = `https://www.youtube.com/embed/${this.video.id.videoId}`;
    this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
