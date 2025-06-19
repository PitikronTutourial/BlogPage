import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageV } from './image-v';

describe('ImageV', () => {
  let component: ImageV;
  let fixture: ComponentFixture<ImageV>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImageV]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageV);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
