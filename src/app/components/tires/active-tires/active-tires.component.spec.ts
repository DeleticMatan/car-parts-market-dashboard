import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTiresComponent } from './active-tires.component';

describe('ActiveTiresComponent', () => {
  let component: ActiveTiresComponent;
  let fixture: ComponentFixture<ActiveTiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
