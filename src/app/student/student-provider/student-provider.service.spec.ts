import { TestBed, inject } from '@angular/core/testing';

import { StudentProviderService } from './student-provider.service';

describe('StudentProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StudentProviderService]
    });
  });

  it('should be created', inject([StudentProviderService], (service: StudentProviderService) => {
    expect(service).toBeTruthy();
  }));
});
