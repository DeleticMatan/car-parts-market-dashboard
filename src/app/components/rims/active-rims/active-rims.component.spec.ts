import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveRimsComponent } from './active-rims.component';

describe('ActiveRimsComponent', () => {
  let component: ActiveRimsComponent;
  let fixture: ComponentFixture<ActiveRimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ActiveRimsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveRimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
