import { Component, OnInit } from '@angular/core';
import { AlertProviderService } from './alert-provider/alert-provider.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  alert = '';

  constructor(
    public alertService: AlertProviderService
  ) {}

  ngOnInit() {
    this.subscribeToAlerts();
  }

  public subscribeToAlerts() {
    this.alertService.alert.subscribe(
      response => {
        this.alert = response;
      }
    );
  }

  public closeAlert() {
    this.alertService.clearAlert();
  }

}
