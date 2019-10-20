import { TestBed } from '@angular/core/testing';

import { TheServiceService } from './the-service.service';

describe('TheServiceService', () => {
  let service: TheServiceService;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => service = TestBed.get(TheServiceService));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
