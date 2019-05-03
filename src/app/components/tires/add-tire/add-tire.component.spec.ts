import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTireComponent } from './add-tire.component';

describe('AddTireComponent', () => {
  let component: AddTireComponent;
  let fixture: ComponentFixture<AddTireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
