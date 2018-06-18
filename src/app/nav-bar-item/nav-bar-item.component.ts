import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar-item',
  templateUrl: './nav-bar-item.component.html',
  styleUrls: ['../nav-bar/nav-bar.component.css']
})
export class NavBarItemComponent implements OnInit {

  @Input() gliphicon = 'glyphicon-pencil';
  @Input() title = 'TITLE';
  @Input() routerLink = '/home';

  constructor() { }

  ngOnInit() {
  }

}
