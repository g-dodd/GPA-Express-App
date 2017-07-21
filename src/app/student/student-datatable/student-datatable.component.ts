import { Component, OnInit } from '@angular/core';
import { Student } from '../student-provider/student';
import { StudentProviderService } from '../student-provider/student-provider.service';

@Component({
    selector: 'app-student-datatable',
    templateUrl: './student-datatable.component.html',
    styleUrls: ['./student-datatable.component.scss']
})
export class StudentDatatableComponent implements OnInit {
    // We create a variable to hold the array of Students
    students: Student[] = [];

    constructor(
        // We use the student service as we will need it to get all the students from the database
        public studentService: StudentProviderService
    ) { }

    ngOnInit() {
        // Upon initiation of the component, we subscribe to the student data...
        this.subscribeToStudentsData();
        // ...then call our getStudents() function to retrieve the students
        this.getStudents();
    }

    // This function allows us to subscribe to the student data so that when the student subject changes,
    // we can get the new data to populate the table
    public subscribeToStudentsData() {
        this.studentService.students.subscribe(
            response => {
                this.students = response;
            }
        );
    }

    // This function uses the student service's getAllStudents() function to get the latest
    // data of students from the database
    public getStudents() {
        this.studentService.getAllStudents();
    }

}
