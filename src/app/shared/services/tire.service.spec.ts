import { TestBed } from '@angular/core/testing';

import { TireService } from './tire.service';

describe('TireService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TireService = TestBed.get(TireService);
    expect(service).toBeTruthy();
  });
});
