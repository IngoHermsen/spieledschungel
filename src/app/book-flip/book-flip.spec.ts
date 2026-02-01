import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlipBook } from './book-flip';

describe('FlipBook', () => {
  let component: FlipBook;
  let fixture: ComponentFixture<FlipBook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlipBook]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlipBook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
