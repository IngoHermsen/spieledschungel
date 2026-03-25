import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeineWelt } from './meine-welt';

describe('MeineWelt', () => {
  let component: MeineWelt;
  let fixture: ComponentFixture<MeineWelt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeineWelt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeineWelt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
