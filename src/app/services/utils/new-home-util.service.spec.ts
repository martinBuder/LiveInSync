import { TestBed } from '@angular/core/testing';

import { NewHomeUtilService } from './new-home-util.service';

describe('NewHomeUtilService', () => {
  let service: NewHomeUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewHomeUtilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
