import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTireDialogComponent } from './delete-tire-dialog.component';

describe('DeleteTireDialogComponent', () => {
  let component: DeleteTireDialogComponent;
  let fixture: ComponentFixture<DeleteTireDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTireDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
