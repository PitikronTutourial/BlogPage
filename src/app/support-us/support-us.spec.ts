import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportUs } from './support-us';

describe('SupportUs', () => {
  let component: SupportUs;
  let fixture: ComponentFixture<SupportUs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SupportUs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupportUs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
