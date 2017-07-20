import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentEntryFormComponent } from './student-entry-form/student-entry-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    StudentEntryFormComponent
  ],
  declarations: [StudentEntryFormComponent]
})
export class StudentModule { }
