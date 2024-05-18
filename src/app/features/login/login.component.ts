import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Import Validators
import { GeneralConstants } from '../../constants/general-constants'; 
import { LoginConstants } from '../../constants/login-constants'; 

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    providers: [AuthService]
})
export class LoginComponent {
    message: string;
    form: FormGroup;

    EMAIL = GeneralConstants.EMAIL;
    PASSWORD = GeneralConstants.PASSWORD;
    LOG_IN = GeneralConstants.LOG_IN;
    NO_ACCOUNT = LoginConstants.NO_ACCOUNT;
    REGISTER = GeneralConstants.REGISTER;
    APP_NAME = GeneralConstants.APP_NAME;

    constructor(
        private authService: AuthService,
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    login(): void {
        if (this.form.valid) {
            // Access form control values using this.form.value
            const { username, password } = this.form.value;

            if (this.authService.login(username, password)) {
                this.message = 'Login successful!';
            } else {
                this.message = 'Invalid username or password.';
            }
        } else {
            // Form is invalid, show error message or handle accordingly
            this.message = 'Please enter both username and password.';
        }
    }
}