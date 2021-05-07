import { TestBed } from '@angular/core/testing';

import { AposentosService } from './aposentos.service';

describe('AposentosService', () => {
  let service: AposentosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AposentosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
