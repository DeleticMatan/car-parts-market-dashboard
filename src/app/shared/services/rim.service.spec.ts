import { TestBed } from '@angular/core/testing';

import { RimService } from './rim.service';

describe('RimService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RimService = TestBed.get(RimService);
    expect(service).toBeTruthy();
  });
});
