import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTiresComponent } from './all-tires.component';

describe('AllTiresComponent', () => {
  let component: AllTiresComponent;
  let fixture: ComponentFixture<AllTiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllTiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
