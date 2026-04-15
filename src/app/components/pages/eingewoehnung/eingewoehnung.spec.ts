import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eingewoehnung } from './eingewoehnung';

describe('Eingewoehnung', () => {
  let component: Eingewoehnung;
  let fixture: ComponentFixture<Eingewoehnung>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Eingewoehnung]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eingewoehnung);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
