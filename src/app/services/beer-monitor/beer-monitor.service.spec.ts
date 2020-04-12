import { TestBed } from '@angular/core/testing';

import { BeerMonitorService } from './beer-monitor.service';

describe('BeerMonitorService', () => {
  let service: BeerMonitorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeerMonitorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
