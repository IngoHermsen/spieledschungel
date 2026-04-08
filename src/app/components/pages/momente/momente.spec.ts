import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Momente } from './momente';

describe('Momente', () => {
  let component: Momente;
  let fixture: ComponentFixture<Momente>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Momente]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Momente);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
