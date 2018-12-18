import { Component, OnInit } from '@angular/core';
import { YoutubeService} from './youtube.service';
import { Router } from '@angular/router';
import { KaraokempService } from './karaokemp.service';






const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';

@Component({
  templateUrl: './video-search.component.html',
  styleUrls: ['./video-search.component.css']
})
export class VideoSearchComponent implements OnInit {
  term = '';
  selectedVideo;

  constructor(private backend: KaraokempService, private youtube: YoutubeService,private router: Router) { }

  ngOnInit() {
    this.onVideoUpload.bind(this);
    this.onVideoSelect.bind(this);
    this.onTermChange.bind(this);
    this.isYoutubeLink.bind(this);
  }

  isYoutubeLink(line){
        let youtubeUrl = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(line.match(youtubeUrl)){
            return line.match(youtubeUrl)[1];
        }
        return false;
    }
  
onTermChange() {

  this.youtube.getSearchResults(this.term).then((results)=>{
    console.log(results);

  }).catch((err)=>{
    console.log(err);
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
      const payload = {title: this.selectedVideo.title, id: this.selectedVideo.id};
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
