import { TestBed, inject } from '@angular/core/testing';

import { ServicefirebaseService } from './servicefirebase.service';

describe('ServicefirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicefirebaseService]
    });
  });

  it('should be created', inject([ServicefirebaseService], (service: ServicefirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
