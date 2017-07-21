import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AlertProviderService } from '../../alert-provider/alert-provider.service';
import { StudentProviderService } from './student-provider.service';

describe('StudentProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [AlertProviderService, StudentProviderService]
    });
  });

  it('should be created', inject([StudentProviderService], (service: StudentProviderService) => {
    expect(service).toBeTruthy();
  }));
});
