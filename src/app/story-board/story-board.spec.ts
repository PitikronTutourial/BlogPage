import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryBoard } from './story-board';

describe('StoryBoard', () => {
  let component: StoryBoard;
  let fixture: ComponentFixture<StoryBoard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoryBoard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StoryBoard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
