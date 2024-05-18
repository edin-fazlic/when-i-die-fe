import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MessageService } from '../../services/message.service'; 

@Component({
  selector: 'app-delete-message-modal',
  templateUrl: './delete-message-modal.component.html',
})
export class DeleteMessageModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteMessageModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, // Inject MAT_DIALOG_DATA
    private messageService: MessageService
  ) {}

  onCancelClick(): void {
    this.dialogRef.close(false); // Close the dialog without deleting the message
  }

  onConfirmClick(): void {
    console.log("da");
    this.dialogRef.close(false);
    
    const messageId = this.data.messageId; // Retrieve the message ID
    this.messageService.deleteMessage(messageId).subscribe(
      () => {
        this.dialogRef.close(true); // Close the dialog after deleting the message
      },
      (error) => console.error('Error deleting message', error)
    );
  }
}
