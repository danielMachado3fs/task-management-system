import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../shared/types/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private endpoint = 'http://localhost:3001/api/task'
  constructor(private http: HttpClient){}

  findTasks(): Observable<any>{
    return this.http.get(this.endpoint)
  }

  getTask(_id: string): Observable<any>{
    return this.http.get(`${this.endpoint}/${_id}`)
  }

  deletTask(_id: string): Observable<any>{
    return this.http.delete(`${this.endpoint}/${_id}`)
  }

  createTask(data: Task): Observable<any>{
    return this.http.post(this.endpoint, data)
  }
}