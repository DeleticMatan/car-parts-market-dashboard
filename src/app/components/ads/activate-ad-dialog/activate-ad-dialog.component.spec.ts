import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateAdDialogComponent } from './activate-ad-dialog.component';

describe('ActivateAdDialogComponent', () => {
  let component: ActivateAdDialogComponent;
  let fixture: ComponentFixture<ActivateAdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateAdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateAdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
