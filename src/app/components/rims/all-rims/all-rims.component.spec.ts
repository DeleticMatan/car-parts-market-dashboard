import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRimsComponent } from './all-rims.component';

describe('AllRimsComponent', () => {
  let component: AllRimsComponent;
  let fixture: ComponentFixture<AllRimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AllRimsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
