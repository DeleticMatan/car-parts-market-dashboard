import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAdDialogComponent } from './delete-ad-dialog.component';

describe('DeleteAdDialogComponent', () => {
  let component: DeleteAdDialogComponent;
  let fixture: ComponentFixture<DeleteAdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
