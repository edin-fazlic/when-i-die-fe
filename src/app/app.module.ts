import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './features/registration/registration.component';
import { FormInputComponent } from './features/form-input/form-input.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {HomepageComponent} from "./homepage/homepage.component";
import { SettingsComponent } from './settings/settings.component';
import {MatRadioModule} from '@angular/material/radio'
import {NavigateToService} from "./services/navigate-to.service";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FormInputComponent,
    HomepageComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
  ],
  providers: [
    provideAnimationsAsync(),
    NavigateToService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
