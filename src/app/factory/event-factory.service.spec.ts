import { TestBed } from '@angular/core/testing';

import { EventFactoryService } from './event-factory.service';

describe('EventFactoryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EventFactoryService = TestBed.get(EventFactoryService);
    expect(service).toBeTruthy();
  });
});
