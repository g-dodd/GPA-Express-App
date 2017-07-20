import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs/Rx';

@Injectable()
export class StudentProviderService {

  private students: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  constructor() { }

  public getAllStudents() {
    return this.students.asObservable();
  }

  public addStudent(student) {
    
  }
}
