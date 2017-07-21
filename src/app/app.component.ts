import { Component, OnInit } from '@angular/core';
import { AlertProviderService } from './alert-provider/alert-provider.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    // Setup a variable to hold an alert
    alert = '';

    constructor(
        // We add the AlertProviderService so that we can utilize
        // alerts in this component
        public alertService: AlertProviderService
    ) { }

    ngOnInit() {
        // Upon the initialization of the component, we call the subscribeToAlerts
        // function to subscribe to the alert BehaviorSubject
        this.subscribeToAlerts();
    }

    // This function subscribes to the alert BehaviorSubject and assigns the alert
    // response to the local alert variable
    public subscribeToAlerts() {
        this.alertService.alert.subscribe(
            response => {
                this.alert = response;
            }
        );
    }

    // This function uses the alert service's clearAlert() function to clear
    // the alert
    public closeAlert() {
        this.alertService.clearAlert();
    }

}
