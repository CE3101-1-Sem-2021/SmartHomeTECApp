import { TestBed } from '@angular/core/testing';

import { LogicServiceService } from './logic-service.service';

describe('LogicServiceService', () => {
  let service: LogicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
