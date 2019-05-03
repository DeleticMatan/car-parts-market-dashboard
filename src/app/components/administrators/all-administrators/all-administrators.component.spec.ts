import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllAdministratorsComponent } from './all-administrators.component';

describe('AllAdministratorsComponent', () => {
  let component: AllAdministratorsComponent;
  let fixture: ComponentFixture<AllAdministratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllAdministratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
