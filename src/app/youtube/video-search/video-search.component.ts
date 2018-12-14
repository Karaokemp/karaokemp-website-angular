import { Component, OnInit } from '@angular/core';
import { KaraokempService } from '../../karaokemp.service';
import { Router } from '@angular/router';




const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';

@Component({
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  link = '';
  selectedVideo;

  constructor(private backend: KaraokempService, private router: Router) { }

  ngOnInit() {
    this.onVideoUpload.bind(this);
    this.onVideoSelect.bind(this);
    this.onLinkChange.bind(this);
    this.isYoutubeLink.bind(this);
    this.getSelectedVideo.bind(this);
  }

  isYoutubeLink(line){
        let youtubeUrl = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(line.match(youtubeUrl)){
            return line.match(youtubeUrl)[1];
        }
        return false;
    }
  
onLinkChange() {

  this.selectedVideo = this.getSelectedVideo();

    }

    getSelectedVideo(){
      let videoId = this.parseId(this.link);
      this.backend.getVideo(videoId).subscribe(video=>{
        this.selectedVideo = video;
      });
    }


    parseId(url){
      var ID = '';
      url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
      if(url[2] !== undefined) {
        ID = url[2].split(/[^0-9a-z_\-]/i);
        ID = ID[0];
      }
      else {
        ID = url;
      }
        return ID.toString();
    }
    



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
