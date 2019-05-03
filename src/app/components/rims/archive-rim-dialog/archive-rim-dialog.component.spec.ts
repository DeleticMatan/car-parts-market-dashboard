import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchiveRimDialogComponent } from './archive-rim-dialog.component';

describe('ArchiveRimDialogComponent', () => {
  let component: ArchiveRimDialogComponent;
  let fixture: ComponentFixture<ArchiveRimDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchiveRimDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchiveRimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
