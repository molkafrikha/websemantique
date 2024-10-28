import { TestBed } from '@angular/core/testing';

import { HealthActivityServiceService } from './health-activity-service';

describe('HealthActivityServiceService', () => {
  let service: HealthActivityServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HealthActivityServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
