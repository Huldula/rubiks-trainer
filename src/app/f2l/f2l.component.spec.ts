import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { F2lComponent } from './f2l.component';

describe('F2lComponent', () => {
  let component: F2lComponent;
  let fixture: ComponentFixture<F2lComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ F2lComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(F2lComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
