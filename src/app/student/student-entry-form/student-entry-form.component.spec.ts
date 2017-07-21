import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertProviderService } from '../../alert-provider/alert-provider.service';
import { StudentEntryFormComponent } from './student-entry-form.component';
import { StudentProviderService } from '../student-provider/student-provider.service';

describe('StudentEntryFormComponent', () => {
  let component: StudentEntryFormComponent;
  let fixture: ComponentFixture<StudentEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, ReactiveFormsModule],
      declarations: [ StudentEntryFormComponent ],
      providers: [AlertProviderService, StudentProviderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
