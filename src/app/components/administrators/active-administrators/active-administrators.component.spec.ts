import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveAdministratorsComponent } from './active-administrators.component';

describe('ActiveAdministratorsComponent', () => {
  let component: ActiveAdministratorsComponent;
  let fixture: ComponentFixture<ActiveAdministratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveAdministratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
