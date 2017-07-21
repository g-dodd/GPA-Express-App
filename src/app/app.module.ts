import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { AlertProviderService } from './alert-provider/alert-provider.service';
import { StudentModule } from './student/student.module';
import { StudentProviderService } from './student/student-provider/student-provider.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    StudentModule
  ],
  providers: [AlertProviderService, StudentProviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
