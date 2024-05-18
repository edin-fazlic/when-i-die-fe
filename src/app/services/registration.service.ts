import { FormGroup } from '@angular/forms';

export class RegistrationService {
    constructor() {}

    validateRegistrationForm(form: FormGroup): string | null {
        
        if (form.value.password !== form.value.confirm_password) {
            return 'Passwords have to match.';
        }

        if (form.invalid) {
            const passwordControl = form.get('password');
            if (passwordControl.errors && passwordControl.errors.pattern) {
                return 'Password must be at least 8 characters long and contain at least one letter and one number.';
            }

            const emailControl = form.get('email');
            if (emailControl.errors) {
                return 'Please enter a valid email address.';
            }

            return 'Please fill in all the fields!';
        } else {
            return null;
        }
    }
}
