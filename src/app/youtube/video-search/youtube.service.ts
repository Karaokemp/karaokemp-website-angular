import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import searchYoutube from 'youtube-api-v3-search';



const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  getSearchResults(term:string){
  

    return new Promise((reject,resolve)=>{


      const options = {
        q: term,
        part:'snippet',
        type:'video'
      }

      searchYoutube(API_KEY,options).then((result)=>{

        let videos = result.items.map((video)=>{
          return {
            id: video.id.videoId,
            title: video.snippet.title,
            img: video.snippet.thumbnails.default.url
          };
          
        });

        resolve(videos);
    
  
      });

    });

  }

    getKaraokeSearchResults(term:string){

      let karaokeTerm = `"${term}"+${this.defineKaraokeWord(term)}`;


      return this.getSearchResults(karaokeTerm);

    }

    defineKaraokeWord(term:string): string {
      var str = term[0];
  var position = str.search(/[\u0590-\u05FF]/);
  if(position >= 0){
  
    return 'קריוקי';
    }else{
      return 'karaoke';
    }
  
  }





    

}


