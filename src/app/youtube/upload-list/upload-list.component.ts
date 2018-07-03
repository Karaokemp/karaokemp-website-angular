import { Component, OnInit } from '@angular/core';
import {KaraokempService} from '../../karaokemp.service';

@Component({
  selector: 'app-upload-list',
  templateUrl: './upload-list.component.html',
  styleUrls: ['./upload-list.component.css']
})
export class UploadListComponent implements OnInit {
  uploads;

  constructor(private backend: KaraokempService) { }

  ngOnInit() {
    this.backend.getUploads().subscribe((data) => {
      this.uploads = data;
    });
  }
  onDownload() {
    console.log('Downloading...');
  }
}
