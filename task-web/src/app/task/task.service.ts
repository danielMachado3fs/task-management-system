import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../shared/types/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  $task = new BehaviorSubject<Task | undefined>(undefined);
  private endpoint = 'http://localhost:3001/api/task'
  constructor(private http: HttpClient){}

  createTask(data: Task): Observable<any>{
    return this.http.post(this.endpoint, data)
  }

  findTasks(): Observable<any>{
    return this.http.get(this.endpoint)
  }

  getTask(_id: string): Observable<any>{
    return this.http.get(`${this.endpoint}/${_id}`)
  }
  
  updateTask(_id: string, data: Task){
    return this.http.patch(`${this.endpoint}/${_id}`, data)
  }

  deleteTask(_id: string): Observable<any>{
    return this.http.delete(`${this.endpoint}/${_id}`)
  }
}