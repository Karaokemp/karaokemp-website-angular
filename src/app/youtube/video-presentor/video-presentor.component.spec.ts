import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoPresentorComponent } from './video-presentor.component';

describe('VideoPresentorComponent', () => {
  let component: VideoPresentorComponent;
  let fixture: ComponentFixture<VideoPresentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoPresentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoPresentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
