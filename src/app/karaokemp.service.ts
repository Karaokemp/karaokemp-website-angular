import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const API_KEY = 'AIzaSyAGDd4JexGEldbkRsq-dneYSjEHj8DQY_c';
const KARAOKEMP_BACKEND_URL = 'https://karaokemp-backend.herokuapp.com/';
// const KARAOKEMP_BACKEND_URL ='http://localhost:3000/';

@Injectable({
  providedIn: 'root'
})
export class KaraokempService {

  constructor(private http: HttpClient) { }

  getUploads() {
    return this.http.get(`${KARAOKEMP_BACKEND_URL}uploads`);
  }
}

