import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService {
  private messagesUrl = 'http://localhost:8080/messages';

  constructor(private http: HttpClient) {}

  getMessages(): Observable<any> {
    return this.http.get<any>(this.messagesUrl);
  }

  getMessageById(id: number): Observable<any> {
    return this.http.get<any>(`${this.messagesUrl}/${id}`);
  }

  newMessage(message: any): Observable<any> {
    return this.http.post<any>(this.messagesUrl, message);
  }

  updateMessage(id: number, message: any): Observable<any> {
    return this.http.put<any>(`${this.messagesUrl}/${id}`, message);
  }

  deleteMessage(id: number): Observable<any> {
    return this.http.delete<any>(`${this.messagesUrl}/${id}`);
  }
}
