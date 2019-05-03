import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAdministratorComponent } from './edit-administrator.component';

describe('EditAdministratorComponent', () => {
  let component: EditAdministratorComponent;
  let fixture: ComponentFixture<EditAdministratorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAdministratorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAdministratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
