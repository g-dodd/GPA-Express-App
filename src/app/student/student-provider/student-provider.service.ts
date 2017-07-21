import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Student } from './student';
import { AlertProviderService } from '../../alert-provider/alert-provider.service';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentProviderService {
  private studentData: Student[] = [];
  private apiUrl = 'http://gpa-express-api.gregdodd.com/';
  public students: BehaviorSubject<Array<Student>> = new BehaviorSubject([]);

  constructor(
    private http: Http,
    private alertService: AlertProviderService
  ) { }

  public getAllStudents(): void {

    this.http.get(this.apiUrl + 'students')
      .map((res: Response) => res.json())
      .subscribe(
        response => {
          if (response.students) {
            this.studentData = response.students;
          }
          this.students.next(this.studentData);
        }
      );
  }

  public addStudent(student): void {

    this.http.post(this.apiUrl + 'students', student)
      .map((res: Response) => res.json())
      .subscribe(
        response => {
          this.alertService.pushAlert('The student has been added successfully!');
          this.studentData.push(response.student);
          this.students.next(this.studentData);
        }
      );
  }
}
