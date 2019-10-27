import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Methd2Component } from './methd2.component';

describe('Methd2Component', () => {
  let component: Methd2Component;
  let fixture: ComponentFixture<Methd2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Methd2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Methd2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
