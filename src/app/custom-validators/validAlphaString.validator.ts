import { AbstractControl } from '@angular/forms';

export function ValidAlphaString(control: AbstractControl) {
    const nameRegex = /^[a-zA-Z]+$/;
    if (!control.value.match(nameRegex)) {
        return { invalidAlphaString: true };
    }
  return null;
}
