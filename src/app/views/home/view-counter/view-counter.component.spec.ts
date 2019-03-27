import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCounterComponent } from './view-counter.component';

describe('ViewCounterComponent', () => {
  let component: ViewCounterComponent;
  let fixture: ComponentFixture<ViewCounterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewCounterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
