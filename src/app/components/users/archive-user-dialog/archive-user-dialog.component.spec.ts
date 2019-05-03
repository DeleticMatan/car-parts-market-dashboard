import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveUserDialogComponent } from './archive-user-dialog.component';

describe('ArchiveUserDialogComponent', () => {
  let component: ArchiveUserDialogComponent;
  let fixture: ComponentFixture<ArchiveUserDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveUserDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveUserDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
