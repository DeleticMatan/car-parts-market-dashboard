import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveTireDialogComponent } from './archive-tire-dialog.component';

describe('ArchiveTireDialogComponent', () => {
  let component: ArchiveTireDialogComponent;
  let fixture: ComponentFixture<ArchiveTireDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveTireDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveTireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
