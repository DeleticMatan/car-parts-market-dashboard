import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRimComponent } from './add-rim.component';

describe('AddRimComponent', () => {
  let component: AddRimComponent;
  let fixture: ComponentFixture<AddRimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddRimComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
