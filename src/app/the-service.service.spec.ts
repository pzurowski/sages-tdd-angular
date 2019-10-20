import { TestBed } from '@angular/core/testing';

import { TheServiceService } from './the-service.service';

describe('TheServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TheServiceService = TestBed.get(TheServiceService);
    expect(service).toBeTruthy();
  });
});
