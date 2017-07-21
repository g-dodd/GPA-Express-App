import { AbstractControl } from '@angular/forms';

export function ValidGpa(control: AbstractControl) {
    const gpaRegex = /^[1-4]\.\d\d$/;
    if (!control.value.match(gpaRegex)) {
        return { invalidGpa: true };
    }
  return null;
}
