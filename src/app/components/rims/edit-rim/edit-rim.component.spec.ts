import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRimComponent } from './edit-rim.component';

describe('EditRimComponent', () => {
  let component: EditRimComponent;
  let fixture: ComponentFixture<EditRimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [EditRimComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
