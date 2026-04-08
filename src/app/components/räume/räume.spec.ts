import { ComponentFixture, TestBed } from '@angular/core/testing';

import { räume } from './räume';

describe('Räume', () => {
  let component: Räume;
  let fixture: ComponentFixture<Räume>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Räume]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Räume);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
