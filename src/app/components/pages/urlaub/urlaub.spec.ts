import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Urlaub } from './urlaub';

describe('Urlaub', () => {
  let component: Urlaub;
  let fixture: ComponentFixture<Urlaub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Urlaub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Urlaub);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
