import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Outtro } from './outtro';

describe('Outtro', () => {
  let component: Outtro;
  let fixture: ComponentFixture<Outtro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Outtro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Outtro);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
