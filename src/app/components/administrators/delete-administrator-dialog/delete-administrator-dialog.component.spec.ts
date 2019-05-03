import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdministratorDialogComponent } from './delete-administrator-dialog.component';

describe('DeleteAdministratorDialogComponent', () => {
  let component: DeleteAdministratorDialogComponent;
  let fixture: ComponentFixture<DeleteAdministratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAdministratorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdministratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
