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
import { MessagesComponent } from './features/messages/messages.component'; 
import { MessageService } from './services/message.service';
import { HttpClientModule } from '@angular/common/http';
import { DeleteMessageModalComponent } from './features/delete-message-modal/delete-message-modal.component'; 
import { MatDialogModule } from '@angular/material/dialog';
import { MessageFormComponent } from './features/message-form/message-form.component'; 
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    FormInputComponent,
    MessagesComponent,
    DeleteMessageModalComponent,
    MessageFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  ],
  providers: [
    provideAnimationsAsync(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
