import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationConstants } from '../../constants/registration-constants'; 
import { GeneralConstants } from '../../constants/general-constants'; 
import { RegistrationService } from '../../services/registration.service'; 

@Component({
    selector: 'app-registration',
    templateUrl: './registration.component.html',
    providers: [RegistrationService],
})
export class RegistrationComponent {
    FIRST_NAME = RegistrationConstants.FIRST_NAME;
    LAST_NAME = RegistrationConstants.LAST_NAME;
    EMAIL = GeneralConstants.EMAIL;
    PASSWORD = GeneralConstants.PASSWORD;
    CONFIRM_PASSWORD = RegistrationConstants.CONFIRM_PASSWORD;
    AGREEMENT_TO_TERMS = RegistrationConstants.AGREEMENT_TO_TERMS;
    LOG_IN = GeneralConstants.LOG_IN;
    YES_ACCOUNT = RegistrationConstants.YES_ACCOUNT;
    REGISTER = GeneralConstants.REGISTER;

    form: FormGroup;
    message: string = '';
    formSubmitted: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private registrationService: RegistrationService,
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            first_name: ['', Validators.required],
            last_name: ['', Validators.required],
            email: [
                '',
                [
                    Validators.required,
                    Validators.pattern(
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    ),
                ],
            ],
            password: [
                '',
                [
                    Validators.required,
                    Validators.pattern(
                        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    ),
                ],
            ],
            confirm_password: ['', Validators.required],
            agree_to_terms: [false, Validators.requiredTrue],
        });
    }

    register(event: Event): void {
        this.formSubmitted = true;
        event.preventDefault();

        this.message = this.registrationService.validateRegistrationForm(
            this.form,
        );

        console.log('Form Data:', this.form.value);

        if (!this.message) {
            this.message = 'Login successful!';
            // All fields are valid, proceed with registration
            // Send data to backend here
        }
    }
}
