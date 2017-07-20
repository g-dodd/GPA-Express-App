import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentEntryFormComponent } from './student-entry-form.component';

describe('StudentEntryFormComponent', () => {
  let component: StudentEntryFormComponent;
  let fixture: ComponentFixture<StudentEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentEntryFormComponent ]
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
