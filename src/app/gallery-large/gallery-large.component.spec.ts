import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryLargeComponent } from './gallery-large.component';

describe('GalleryLargeComponent', () => {
  let component: GalleryLargeComponent;
  let fixture: ComponentFixture<GalleryLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GalleryLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GalleryLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
