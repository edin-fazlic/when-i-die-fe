import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GeneralConstants} from "../constants/general-constants";


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  settingsForm: FormGroup;
  APP_NAME = GeneralConstants.APP_NAME;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.settingsForm = this.formBuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: [{ value: 'amna@amna.com', disabled: true }, Validators.required],
      passedAwayConfirmType: [],
      daysOfInactivity: [{ value: '', disabled: true }],
      timerDate: [{ value: '', disabled: true }]
    });
  }

  toggleInactivity() {
    const inactivityControl = this.settingsForm.get('inactivity');
    const daysOfInactivityControl = this.settingsForm.get('daysOfInactivity');
    if (inactivityControl.value) {
      daysOfInactivityControl.enable();
    } else {
      daysOfInactivityControl.disable();
    }
  }

  saveChanges(): void {
    if (this.settingsForm.valid) {
      const formValues = this.settingsForm.getRawValue();
      console.log('Form Values:', formValues);
      // save logic
    }
  }

  logout(): void {
    console.log('User logged out');
    this.router.navigate(['/login']);
  }

  deleteProfile(): void {
    // delete profile logic
    console.log('Profile deleted');
    this.router.navigate(['/login']);
  }
}
