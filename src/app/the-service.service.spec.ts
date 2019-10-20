import { TestBed } from '@angular/core/testing';

import { TheServiceService } from './the-service.service';
import { ApplicationInitStatus } from '@angular/core';

describe('TheServiceService', () => {
  let service: TheServiceService;

  beforeEach(() => TestBed.configureTestingModule({}));
  beforeEach(() => service = TestBed.get(TheServiceService));

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return length of input', () => {
    const result = service.size('four');

    expect(result).toEqual(4);
  });

  it('should be invoked after initialization finishes', () => {
    const act = () => service.doComplexity();

    expect(act).not.toThrowError();
  });

  it('should not be invoked during initialization', () => {
    const initStatus = TestBed.get(ApplicationInitStatus);
    initStatus.done = false;

    const act = () => service.doComplexity();

    expect(act).toThrowError();
  });
});
