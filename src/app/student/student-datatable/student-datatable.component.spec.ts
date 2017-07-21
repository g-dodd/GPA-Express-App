import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpModule } from '@angular/http';
import { AlertProviderService } from '../../alert-provider/alert-provider.service';
import { StudentDatatableComponent } from './student-datatable.component';
import { StudentProviderService } from '../student-provider/student-provider.service';

describe('StudentDatatableComponent', () => {
  let component: StudentDatatableComponent;
  let fixture: ComponentFixture<StudentDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      declarations: [ StudentDatatableComponent ],
      providers: [AlertProviderService, StudentProviderService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
