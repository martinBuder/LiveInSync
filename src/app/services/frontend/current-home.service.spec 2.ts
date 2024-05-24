import { TestBed } from '@angular/core/testing';

import { CurrentHomeService } from './current-home.service';

describe('CurrentHomeService', () => {
  let service: CurrentHomeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CurrentHomeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
