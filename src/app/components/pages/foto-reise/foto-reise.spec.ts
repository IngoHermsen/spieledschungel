import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoReise } from './foto-reise';

describe('FotoReise', () => {
  let component: FotoReise;
  let fixture: ComponentFixture<FotoReise>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FotoReise]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FotoReise);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
