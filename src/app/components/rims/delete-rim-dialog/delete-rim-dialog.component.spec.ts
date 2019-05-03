import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRimDialogComponent } from './delete-rim-dialog.component';

describe('DeleteRimDialogComponent', () => {
  let component: DeleteRimDialogComponent;
  let fixture: ComponentFixture<DeleteRimDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteRimDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
