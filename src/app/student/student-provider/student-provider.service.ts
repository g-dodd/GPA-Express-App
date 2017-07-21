import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Student } from './student';
import { AlertProviderService } from '../../alert-provider/alert-provider.service';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentProviderService {
    private studentData: Student[] = []; // We create a data store that will hold the student entry list
    private apiUrl = 'http://gpa-express-api.gregdodd.com/'; // We create a variable holding the url string for the api
    // This BehaviorSubject instance is responsible for sending an array of students
    // to all subscribers
    public students: BehaviorSubject<Array<Student>> = new BehaviorSubject([]);

    constructor(
        private http: Http, // We need this dependency for the Http calls
        private alertService: AlertProviderService // We need this dependency to push alerts through the alert service
    ) { }

    // This function retrieves all students from the api
    public getAllStudents(): void {

        this.http.get(this.apiUrl + 'students')
            .map((res: Response) => res.json())
            .subscribe(
                response => {
                    // Here, we check to make sure the response object has a 'students' property
                    if (response.students) {
                        // If it does, we store the students array into the students data store
                        this.studentData = response.students;
                    }
                    // Regardless, we push the student data store through the BehaviorSubject
                    this.students.next(this.studentData);
                }
            );
    }

    // This function adds the student to the api database
    public addStudent(student): void {

        this.http.post(this.apiUrl + 'students', student)
            .map((res: Response) => res.json())
            .subscribe(
                response => {
                    // When we get a successful response, we push an alert through the alert service
                    this.alertService.pushAlert('The student has been added successfully!');
                    // We also push the student from the response into the data store
                    this.studentData.push(response.student);
                    // Finally, we push the data store through the 'students' BehaviorSubject
                    this.students.next(this.studentData);
                }
            );
    }
}
