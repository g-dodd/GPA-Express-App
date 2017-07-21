import { AbstractControl } from '@angular/forms';

// This function takes in the form control and verifies if it is a valid date format
export function ValidDate(control: AbstractControl) {

    const dateRegex = /^\d{4}-\d{2}-\d{2}$/; // We create a regex to check for the appropriate date format
    if (!control.value.match(dateRegex)) { // If the value does not pass the regex test...
        // We return an object with the key to check for the invalid date format with a value
        // of true
        return { invalidDate: true };
    }
    // If we get down here, the control group passes the validation, therefore we return
    // null
    return null;
}
