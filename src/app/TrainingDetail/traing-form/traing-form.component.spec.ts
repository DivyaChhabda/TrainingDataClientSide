import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraingFormComponent } from './traing-form.component';

describe('TraingFormComponent', () => {
  let component: TraingFormComponent;
  let fixture: ComponentFixture<TraingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
