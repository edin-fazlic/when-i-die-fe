import { Component, Input, forwardRef } from '@angular/core';
import {
    FormGroup,
    FormControl,
    NG_VALUE_ACCESSOR,
    ControlValueAccessor,
} from '@angular/forms';
import { RegistrationService } from '../../services/registration.service'; 

@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => FormInputComponent),
            multi: true,
        },
    ],
})
export class FormInputComponent implements ControlValueAccessor {
    constructor(private registrationService: RegistrationService) {}

    onChange: any = () => {};
    onTouch: any = () => {};

    writeValue(value: any): void {
        this.formControl.setValue(value);
    }

    registerOnChange(fn: any): void {
        this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
        this.onTouch = fn;
    }

    setDisabledState(isDisabled: boolean): void {
        isDisabled ? this.formControl.disable() : this.formControl.enable();
    }

    @Input() label: string;
    @Input() formControlName: string;
    @Input() parentForm: FormGroup;
    @Input() placeholder: string;
    @Input() formSubmitted: boolean;
    @Input() hasError: boolean = false;
    @Input() errorFields: string[] = [];

    hidePassword: boolean = true;
    isFocused: boolean = false;

    get formControl(): FormControl {
        return this.parentForm.get(this.formControlName) as FormControl;
    }

    get isPassword(): boolean {
        return (
            this.formControlName === 'password' ||
            this.formControlName === 'confirm_password'
        );
    }

    get isCheckbox(): boolean {
        return this.formControlName === 'agree_to_terms';
    }

    togglePasswordVisibility(inputField: HTMLInputElement): void {
        event.preventDefault();
        this.hidePassword = !this.hidePassword;
        inputField.type = this.hidePassword ? 'password' : 'text';
    }

}
