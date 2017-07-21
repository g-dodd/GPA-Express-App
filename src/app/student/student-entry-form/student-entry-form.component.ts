import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentProviderService } from '../student-provider/student-provider.service';
import { ValidDate } from '../../custom-validators/validDate.validator';
import { ValidAlphaString } from '../../custom-validators/validAlphaString.validator';
import { ValidGpa } from '../../custom-validators/validGpa.validator';

@Component({
  selector: 'app-student-entry-form',
  templateUrl: './student-entry-form.component.html',
  styleUrls: ['./student-entry-form.component.scss']
})
export class StudentEntryFormComponent implements OnInit {
  studentEntryForm: FormGroup;


  constructor(
    public studentService: StudentProviderService,
    public formBuilder: FormBuilder
  ) {
    this.createStudentEntryForm();
  }

  ngOnInit() {
  }

  public createStudentEntryForm() {
    this.studentEntryForm = this.formBuilder.group({
      firstName: ['', [Validators.required, ValidAlphaString]],
      lastName: ['', [Validators.required, ValidAlphaString]],
      dob: ['', [Validators.required, ValidDate]],
      gpa: ['', [Validators.required, ValidGpa]]
    });
  }

  public addStudent(student) {
    this.studentService.addStudent(student);
  }

  public onSubmit() {
    const student = this.prepareStudent(this.studentEntryForm.value);
    this.addStudent(student);
    this.createStudentEntryForm();
  }

  public prepareStudent(formData) {
    const studentData = {
      id: Math.floor(Math.random() * 99) + 1,
      firstName: formData.firstName,
      lastName: formData.lastName,
      dob: formData.dob,
      gpa: formData.gpa
    };

    return studentData;
  }

}
