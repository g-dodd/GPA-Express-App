import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StudentEntryFormComponent } from './student-entry-form/student-entry-form.component';
import { StudentDatatableComponent } from './student-datatable/student-datatable.component';
import { StudentProviderService } from './student-provider/student-provider.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    StudentEntryFormComponent,
    StudentDatatableComponent
  ],
  declarations: [StudentEntryFormComponent, StudentDatatableComponent],
  providers: [StudentProviderService]
})
export class StudentModule { }
