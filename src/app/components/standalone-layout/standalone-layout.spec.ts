import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandaloneLayout } from './standalone-layout';

describe('StandaloneLayout', () => {
  let component: StandaloneLayout;
  let fixture: ComponentFixture<StandaloneLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StandaloneLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StandaloneLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
