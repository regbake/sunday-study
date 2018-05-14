import { TestBed, inject } from '@angular/core/testing';

import { ShareNumberService } from './share-number.service';

describe('ShareNumberService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShareNumberService]
    });
  });

  it('should be created', inject([ShareNumberService], (service: ShareNumberService) => {
    expect(service).toBeTruthy();
  }));
});
