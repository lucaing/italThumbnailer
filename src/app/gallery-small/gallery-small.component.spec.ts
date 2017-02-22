import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GallerySmallComponent } from './gallery-small.component';

describe('GallerySmallComponent', () => {
  let component: GallerySmallComponent;
  let fixture: ComponentFixture<GallerySmallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GallerySmallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GallerySmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
