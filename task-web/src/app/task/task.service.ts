import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Task } from '../shared/types/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private endpoint = 'http://localhost:3001/api/task';
  private authentication = { authorization: 'Bearer 12345678' };
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  showSuccess(message?: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Sucesso',
      detail: message ?? 'Operação realizada com sucesso!',
    });
  }

  showError(message?: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Erro',
      detail: message ?? 'Erro ao realizar operação!',
    });
  }

  createTask(data: Task): Observable<any> {
    return this.http.post(this.endpoint, data);
  }

  findTasks(): Observable<any> {
    return this.http.get(this.endpoint);
  }

  getTask(_id: string): Observable<any> {
    return this.http.get(`${this.endpoint}/${_id}`);
  }

  updateTask(_id: string, data: Task) {
    return this.http.patch(`${this.endpoint}/${_id}`, data, {
      headers: this.authentication,
    });
  }

  deleteTask(_id: string): Observable<any> {
    return this.http.delete(`${this.endpoint}/${_id}`, {
      headers: this.authentication,
    });
  }
}
