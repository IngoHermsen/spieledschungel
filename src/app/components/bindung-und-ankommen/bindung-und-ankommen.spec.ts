import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindungUndAnkommen } from './bindung-und-ankommen';

describe('BindungUndAnkommen', () => {
  let component: BindungUndAnkommen;
  let fixture: ComponentFixture<BindungUndAnkommen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindungUndAnkommen]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindungUndAnkommen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
