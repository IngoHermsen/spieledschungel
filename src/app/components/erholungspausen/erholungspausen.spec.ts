import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Erholungspausen } from './erholungspausen';

describe('Erholungspausen', () => {
  let component: Erholungspausen;
  let fixture: ComponentFixture<Erholungspausen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Erholungspausen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Erholungspausen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
