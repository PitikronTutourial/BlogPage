import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpanded } from './card-expanded';

describe('CardExpanded', () => {
  let component: CardExpanded;
  let fixture: ComponentFixture<CardExpanded>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardExpanded]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExpanded);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
