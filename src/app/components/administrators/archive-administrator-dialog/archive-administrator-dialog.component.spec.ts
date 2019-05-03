import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAdministratorDialogComponent } from './archive-administrator-dialog.component';

describe('ArchiveAdministratorDialogComponent', () => {
  let component: ArchiveAdministratorDialogComponent;
  let fixture: ComponentFixture<ArchiveAdministratorDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveAdministratorDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAdministratorDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
