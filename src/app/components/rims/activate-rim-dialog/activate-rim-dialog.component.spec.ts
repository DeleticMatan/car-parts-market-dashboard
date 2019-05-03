import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivateRimDialogComponent } from './activate-rim-dialog.component';

describe('ActivateRimDialogComponent', () => {
  let component: ActivateRimDialogComponent;
  let fixture: ComponentFixture<ActivateRimDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActivateRimDialogComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivateRimDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
