import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedAdministratorsComponent } from './archived-administrators.component';

describe('ArchivedAdministratorsComponent', () => {
  let component: ArchivedAdministratorsComponent;
  let fixture: ComponentFixture<ArchivedAdministratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedAdministratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedAdministratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
