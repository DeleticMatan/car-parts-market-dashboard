import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveAdDialogComponent } from './archive-ad-dialog.component';

describe('ArchiveAdDialogComponent', () => {
  let component: ArchiveAdDialogComponent;
  let fixture: ComponentFixture<ArchiveAdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchiveAdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveAdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
