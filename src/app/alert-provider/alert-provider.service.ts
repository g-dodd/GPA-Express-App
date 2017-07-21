import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/Rx';

@Injectable()
export class AlertProviderService {

  public alert: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() { }

  public pushAlert(alert) {
    this.alert.next(alert);
  }

  public clearAlert() {
    this.alert.next('');
  }
}
