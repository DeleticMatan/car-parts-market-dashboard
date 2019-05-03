import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedRimsComponent } from './archived-rims.component';

describe('ArchivedRimsComponent', () => {
  let component: ArchivedRimsComponent;
  let fixture: ComponentFixture<ArchivedRimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedRimsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedRimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
