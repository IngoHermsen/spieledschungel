import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Hoerreise } from './hoerreise';

describe('Hoerreise', () => {
  let component: Hoerreise;
  let fixture: ComponentFixture<Hoerreise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoerreise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Hoerreise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
