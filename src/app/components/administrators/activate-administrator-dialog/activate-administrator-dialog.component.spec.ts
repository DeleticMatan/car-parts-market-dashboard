import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAdministratorDialogComponent } from './activate-administrator-dialog.component';

describe('ActivateAdministratorDialogComponent', () => {
  let component: ActivateAdministratorDialogComponent;
  let fixture: ComponentFixture<ActivateAdministratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateAdministratorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateAdministratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
