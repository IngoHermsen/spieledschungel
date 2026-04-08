import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Elternstimmen } from './elternstimmen';

describe('Elternstimmen', () => {
  let component: Elternstimmen;
  let fixture: ComponentFixture<Elternstimmen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Elternstimmen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Elternstimmen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
