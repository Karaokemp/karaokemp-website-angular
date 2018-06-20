import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSearchResultComponent } from './video-search-result.component';

describe('VideoSearchResultComponent', () => {
  let component: VideoSearchResultComponent;
  let fixture: ComponentFixture<VideoSearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoSearchResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoSearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
