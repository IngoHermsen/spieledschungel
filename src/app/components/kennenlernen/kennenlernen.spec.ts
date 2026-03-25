import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Kennenlernen } from './kennenlernen';

describe('Kennenlernen', () => {
  let component: Kennenlernen;
  let fixture: ComponentFixture<Kennenlernen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Kennenlernen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Kennenlernen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
