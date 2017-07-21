import { AbstractControl } from '@angular/forms';

// This function takes in the form control and verifies if it is a valid alpha string
export function ValidAlphaString(control: AbstractControl) {

    const nameRegex = /^[a-zA-Z]+$/; // We create a regex to check for only alpha characters
    if (!control.value.match(nameRegex)) { // If the value does not pass the regex test...
        // We return an object with the key to check for the invalid alpha string with a value
        // of true
        return { invalidAlphaString: true };
    }
    // If we get down here, the control group passes the validation, therefore we return
    // null
    return null;
}
