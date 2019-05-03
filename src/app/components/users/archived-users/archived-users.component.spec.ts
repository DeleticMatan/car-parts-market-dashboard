import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedUsersComponent } from './archived-users.component';

describe('ArchivedUsersComponent', () => {
  let component: ArchivedUsersComponent;
  let fixture: ComponentFixture<ArchivedUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
