import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateTireDialogComponent } from './activate-tire-dialog.component';

describe('ActivateTireDialogComponent', () => {
  let component: ActivateTireDialogComponent;
  let fixture: ComponentFixture<ActivateTireDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivateTireDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateTireDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
