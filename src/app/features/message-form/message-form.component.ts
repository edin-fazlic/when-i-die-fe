import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-message-form',
  templateUrl: './message-form.component.html',
})
export class MessageFormComponent implements OnInit {
  messageForm: FormGroup;
  messageId: number | null = null;
  isNewMessage: boolean = true;

  get recipients(): FormArray {
    return this.messageForm.get('recipients') as FormArray;
  }

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.messageForm = this.formBuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      recipients: this.formBuilder.array([this.createRecipientFormGroup()]),
    });

    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.isNewMessage = false;
        this.messageId = +params['id'];
        this.loadMessageData(this.messageId);
      }
    });
  }

  createRecipientFormGroup(): FormGroup {
    return this.formBuilder.group({
      recipient: ['', Validators.required],
    });
  }

  addRecipient(): void {
    this.recipients.push(this.createRecipientFormGroup());
  }

  removeRecipient(index: number): void {
    if (this.recipients.length > 1) {
      this.recipients.removeAt(index);
    }
  }

  loadMessageData(id: number): void {
    this.messageService.getMessageById(id).subscribe(
      (data) => {
        this.messageForm.patchValue({
          title: data.title,
          content: data.content,
        });

        this.recipients.clear();
        data.recipients.forEach((recipient) => {
          this.recipients.push(
            this.formBuilder.group({
              recipient: [recipient, Validators.required],
            })
          );
        });
      },
      (error) => console.error('Error loading message data', error)
    );
  }

  onSubmit(): void {
    if (this.messageForm.valid) {
      if (this.isNewMessage) {
        this.messageService.newMessage(this.messageForm.value).subscribe(
          () => this.router.navigate(['/messages']),
          (error) => console.error('Error creating new message', error)
        );
      } else {
        this.messageService
          .updateMessage(this.messageId!, this.messageForm.value)
          .subscribe(
            () => this.router.navigate(['/messages']),
            (error) => console.error('Error updating message', error)
          );
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
