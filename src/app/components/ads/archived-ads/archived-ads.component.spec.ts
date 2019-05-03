import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchivedAdsComponent } from './archived-ads.component';

describe('ArchivedAdsComponent', () => {
  let component: ArchivedAdsComponent;
  let fixture: ComponentFixture<ArchivedAdsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ArchivedAdsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArchivedAdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
