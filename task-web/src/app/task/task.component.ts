import { Component, OnInit } from '@angular/core';
import { Task } from '../shared/types/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit{
  isLoading = true;
  tasks: Task[] = []

  constructor(
    private taskService: TaskService
  ){}

  ngOnInit(){
    this.fetchTasks();
  }

  fetchTasks(){
    this.isLoading = true;
    this.taskService.findTasks().subscribe({
      next: (res) => {
        console.log("🚀 ~ TaskComponent ~ this.taskService.findTasks ~ res:", res)
        setTimeout(() => {
          this.tasks = res.data;
          this.isLoading = false;
        }, 3000);
      },
      error: (err) => {
        console.log("🚀 ~ TaskComponent ~ this.taskService.findTasks ~ err:", err)
      }
    })
  }

  taskDelete(_id: string){

  }
}
