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
    // We create a variable for the FormGroup
    studentEntryForm: FormGroup;

    constructor(
        // We utilize the Student Provider service to handle adding the students
        public studentService: StudentProviderService,
        // We utilize FormBuilder to create the form
        public formBuilder: FormBuilder
    ) {
        // Upon construction of the component, we call the createStudentEntryForm() function to
        // create the form
        this.createStudentEntryForm();
    }

    ngOnInit() {
    }

    // This function creates the form using the formBuilder's 'group' method
    public createStudentEntryForm() {
        this.studentEntryForm = this.formBuilder.group({
            firstName: ['', [Validators.required, ValidAlphaString]],
            lastName: ['', [Validators.required, ValidAlphaString]],
            dob: ['', [Validators.required, ValidDate]],
            gpa: ['', [Validators.required, ValidGpa]]
        });
    }

    // This function uses the student service to add the student to the database
    public addStudent(student) {
        this.studentService.addStudent(student);
    }

    // This function is called upon the submission of the form to prepare the student form
    // data as a proper object to create the student using the student service.
    public onSubmit() {
        // We prepare the form data store the results into a variable
        const student = this.prepareStudent(this.studentEntryForm.value);
        // We then pass that variable to our 'addStudent' function to create the student as intended.
        this.addStudent(student);
        // Afterwards, we recreate the form to clear the form data.
        this.createStudentEntryForm();
    }

    // This function prepares the form data passed in into an object we can
    // send to the api to add the student
    public prepareStudent(formData) {
        const studentData = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            dob: formData.dob,
            gpa: formData.gpa
        };

        return studentData;
    }

}
