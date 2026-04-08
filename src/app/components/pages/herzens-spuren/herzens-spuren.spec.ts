import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerzensSpuren } from './herzens-spuren';

describe('HerzensSpuren', () => {
  let component: HerzensSpuren;
  let fixture: ComponentFixture<HerzensSpuren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HerzensSpuren]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HerzensSpuren);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
