import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Student } from './student';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentProviderService {
  private studentData: Student[] = [];
  private students: BehaviorSubject<Array<Student>> = new BehaviorSubject(this.studentData);
  private apiUrl = 'http://gpa-express-api.gregdodd.com/';

  constructor(
    private http: Http
  ) { }

  public getAllStudents(): Observable<any> {

    return this.http.get(this.apiUrl + 'students')
      .map((res: Response) => res.json());
  }

  public addStudent(student) {
    this.studentData.push(student);
    this.students.next(this.studentData);
  }
}
