import { Component, OnInit } from '@angular/core';
import { Student } from '../student-provider/student';
import { StudentProviderService } from '../student-provider/student-provider.service';

@Component({
  selector: 'app-student-datatable',
  templateUrl: './student-datatable.component.html',
  styleUrls: ['./student-datatable.component.scss']
})
export class StudentDatatableComponent implements OnInit {
  students: Student[] = [];
  constructor(
    public studentService: StudentProviderService
  ) { }

  ngOnInit() {
    this.getStudents();
  }

  public getStudents() {
    this.studentService.getAllStudents()
      .subscribe(
        students => {
          this.students = students;
        },
        error => {
          console.log('Error', error);
        }
      );
  }

}
