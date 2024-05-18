import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from '../../services/message.service';
import { DeleteMessageModalComponent } from '../delete-message-modal/delete-message-modal.component';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
})
export class MessagesComponent implements OnInit {
  messages = [];

  constructor(
    private messageService: MessageService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadMessages();
  }

  loadMessages(): void {
    this.messageService.getMessages().subscribe(
      (data) => (this.messages = data),
      (error) => console.error('Error fetching messages', error)
    );
  }

  openDeleteModal(id: number): void {
    const dialogRef = this.dialog.open(DeleteMessageModalComponent, {
      width: '400px',
      data: { message: 'Are you sure you want to delete this message?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.deleteMessage(id);
      }
    });
  }

  deleteMessage(id: number): void {
    this.messageService.deleteMessage(id).subscribe(
      () => this.loadMessages(),
      (error) => console.error('Error deleting message', error)
    );
  }

  editMessage(id: number): void {
    this.router.navigate(['/messages/edit', id]);
  }
}
