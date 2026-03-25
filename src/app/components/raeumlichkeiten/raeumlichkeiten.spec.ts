import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Raeumlichkeiten } from './raeumlichkeiten';

describe('Raeumlichkeiten', () => {
  let component: Raeumlichkeiten;
  let fixture: ComponentFixture<Raeumlichkeiten>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Raeumlichkeiten]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Raeumlichkeiten);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
