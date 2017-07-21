import { AbstractControl } from '@angular/forms';

export function ValidDate(control: AbstractControl) {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    if (!control.value.match(dateRegex)) {
        return { invalidDate: true };
    }
  return null;
}
