import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';
import { Student } from './student';

@Injectable()
export class StudentProviderService {
  private studentData: Student[] = [];
  private students: BehaviorSubject<Array<Student>> = new BehaviorSubject(this.studentData);

  constructor() { }

  public getAllStudents(): Observable<Student[]> {
    return this.students.asObservable();
  }

  public addStudent(student) {
    this.studentData.push(student);
    this.students.next(this.studentData);
  }
}
