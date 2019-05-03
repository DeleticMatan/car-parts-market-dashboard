import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBannersComponent } from './all-banners.component';

describe('AllBannersComponent', () => {
  let component: AllBannersComponent;
  let fixture: ComponentFixture<AllBannersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllBannersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
