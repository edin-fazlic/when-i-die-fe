import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio'; // Added
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './features/registration/registration.component';
import { FormInputComponent } from './features/form-input/form-input.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DeleteMessageModalComponent } from './features/delete-message-modal/delete-message-modal.component';
import { MessageFormComponent } from './features/message-form/message-form.component';
import { MessagesComponent } from './features/messages/messages.component';
import { HomepageComponent } from './homepage/homepage.component';
import { MessageService } from './services/message.service';
import { NavigateToService } from './services/navigate-to.service';
import { SettingsComponent } from './settings/settings.component';
import { MatInputModule } from '@angular/material/input'; // Added
import { MatButtonModule } from '@angular/material/button'; // Added
import { MatFormFieldModule } from '@angular/material/form-field'; // Added
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async'; 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FormInputComponent,
    MessagesComponent,
    DeleteMessageModalComponent,
    MessageFormComponent,
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
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [
    provideAnimationsAsync(),
    MessageService,
    NavigateToService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
