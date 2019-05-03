import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedTiresComponent } from './archived-tires.component';

describe('ArchivedTiresComponent', () => {
  let component: ArchivedTiresComponent;
  let fixture: ComponentFixture<ArchivedTiresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArchivedTiresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedTiresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
