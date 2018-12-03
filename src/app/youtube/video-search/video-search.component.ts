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
  term = '';
  searchResults = [];
  selectedVideo;

  constructor(private backend: KaraokempService, private router: Router) { }

  ngOnInit() {
    this.onVideoUpload.bind(this);
    this.onVideoSelect.bind(this);
    this.onTermChange.bind(this);
    this.isYoutubeLink.bind(this);
    this.handleYoutubeLink.bind(this);
    this.search();
  }

  isYoutubeLink(line){
        let youtubeUrl = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
        if(line.match(youtubeUrl)){
            return line.match(youtubeUrl)[1];
        }
        return false;
    }
  defineKaraokeWord(): string {

    let karaokeWord = 'karaoke';
    if(this.term.length > 0 && this.term[0].search(/[\u0590-\u05FF]/) >= 0){
  karaokeWord = 'קריוקי';
}
return karaokeWord;
}
  
onTermChange() {

  if(this.isYoutubeLink(this.term)){

      this.handleYoutubeLink(this.term);
  }else{
      this.search();
  }
    }

    handleYoutubeLink(youtubeUrl){
      const videoId = this.parseId(youtubeUrl);
      const payload = {id: videoId};
      this.backend.upload(payload).subscribe((response) => {
        let title = response['title'];
        if(title){
          this.router.navigate(['youtube/uploads']);

        }else{
          console.log(`Could not find the song title for link ${youtubeUrl}`);
        }

      }, (error) => {
        console.error(error);
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
    

    search(){

      const karaokeWord = this.defineKaraokeWord();
    const karaokeTerm = `${this.term} +${karaokeWord}`;
    YTSearch({ key: API_KEY, term: karaokeTerm}, videos => {
      this.searchResults = videos;
      this.selectedVideo = this.searchResults[0];
      });

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
