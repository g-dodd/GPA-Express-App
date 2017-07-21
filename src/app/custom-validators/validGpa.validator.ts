import { AbstractControl } from '@angular/forms';

// This function takes in the form control and verifies if it is a valid grade point average format
export function ValidGpa(control: AbstractControl) {

    const gpaRegex = /^[1-4]\.\d\d$/; // We create a regex to check for the appropriate grade point average format
    if (!control.value.match(gpaRegex)) { // If the value does not pass the regex test...
        // We return an object with the key to check for the invalid grade point average format with a value
        // of true
        return { invalidGpa: true };
    }
    // If we get down here, the grade point average value passes the validation, therefore
    //  we return null
    return null;
}
