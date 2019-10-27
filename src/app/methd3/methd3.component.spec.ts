import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Methd3Component } from './methd3.component';

describe('Methd3Component', () => {
  let component: Methd3Component;
  let fixture: ComponentFixture<Methd3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Methd3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Methd3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
