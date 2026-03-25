import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TagImSpieledschungel } from './tag-im-spieledschungel';

describe('TagImSpieledschungel', () => {
  let component: TagImSpieledschungel;
  let fixture: ComponentFixture<TagImSpieledschungel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TagImSpieledschungel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TagImSpieledschungel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
