import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse} from '@angular/common/http';
import searchYoutube from 'youtube-api-v3-search';



const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';


@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

chanId = 'yourchannelid';
result = 3; //how many videos you want to retrieve

  constructor(private http: HttpClient) { }

  getSearchResults(term:string){

    console.log(term);

    const options = {
      q: term,
      part:'snippet',
      type:'video'
    }

    searchYoutube(API_KEY,options).then((result)=>{

      let videos = result.items
      let items = videos.map((video)=>{
        return {
          id: video.id.videoId,
          title: video.snippet.title,
          img: video.snippet.thumbnails.default.url
        };
        
      });

      console.log(items[0]);


    });



 
     

  




  } 

}


