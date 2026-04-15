import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Transparenz } from './transparenz';

describe('Transparenz', () => {
  let component: Transparenz;
  let fixture: ComponentFixture<Transparenz>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Transparenz]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Transparenz);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
