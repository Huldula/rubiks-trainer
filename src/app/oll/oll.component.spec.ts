import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OllComponent } from './oll.component';

describe('OllComponent', () => {
  let component: OllComponent;
  let fixture: ComponentFixture<OllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
