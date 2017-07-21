import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AlertProviderService {

    // We create a BehaviorSubject instance so that we can have a default value
    // to use when we subscribe to the Subject
    public alert: BehaviorSubject<string> = new BehaviorSubject('');

    constructor() { }

    // This function uses the passed in string and pushes it through the alert
    // BehaviorSubject
    public pushAlert(alert: string) {
        this.alert.next(alert);
    }

    // This function pushes an empty string through the BehaviorSubject in order to clear
    // the alert variable
    public clearAlert() {
        this.alert.next('');
    }
}
