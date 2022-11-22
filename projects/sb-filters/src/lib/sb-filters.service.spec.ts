import { TestBed } from '@angular/core/testing';

import { SbFiltersService } from './sb-filters.service';

describe('SbFiltersService', () => {
  let service: SbFiltersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbFiltersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
