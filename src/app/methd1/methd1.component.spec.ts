import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Methd1Component } from './methd1.component';

describe('Methd1Component', () => {
  let component: Methd1Component;
  let fixture: ComponentFixture<Methd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Methd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Methd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
