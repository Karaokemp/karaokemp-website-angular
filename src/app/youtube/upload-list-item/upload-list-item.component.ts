import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-upload-list-item',
  templateUrl: './upload-list-item.component.html',
  styleUrls: ['./upload-list-item.component.css']
})
export class UploadListItemComponent implements OnInit {
  @Input() upload;

  constructor() { }

  ngOnInit() {
  }

}
