import { TestBed } from '@angular/core/testing';

import { SuccessEventService } from './success-event.service';

describe('SuccessEventService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SuccessEventService = TestBed.get(SuccessEventService);
    expect(service).toBeTruthy();
  });
});
