import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Task } from '../shared/types/task';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  isLoading = true;
  isLoadingPage = false;
  tasks: Task[] = [];
  showModal = false;
  deletedId = '';

  constructor(
    private taskService: TaskService,
    private changeDetector: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.fetchTasks();
  }

  toggleModal(_id?: string) {
    if (_id) this.deletedId = _id;
    this.showModal = !this.showModal;
  }

  fetchTasks() {
    this.isLoading = true;
    this.taskService.findTasks().subscribe({
      next: (res) => {
        console.log(
          '🚀 ~ TaskComponent ~ this.taskService.findTasks ~ res:',
          res
        );
        setTimeout(() => {
          this.tasks = res.data;
          this.isLoading = false;
        }, 2000);
      },
      error: (err) => {
        console.log(
          '🚀 ~ TaskComponent ~ this.taskService.findTasks ~ err:',
          err
        );
      },
    });
  }

  taskDelete() {
    this.isLoadingPage = true;
    this.taskService.deleteTask(this.deletedId).subscribe({
      next: () => {
        setTimeout(() => {
          this.tasks = this.tasks.filter((t) => t._id != this.deletedId);
          this.deletedId = '';
          this.toggleModal();
          this.isLoadingPage = false;
          this.changeDetector.detectChanges();
        }, 1000);
      },
      error: (err) => {
        console.log(
          '🚀 ~ TaskComponent ~ this.taskService.deleteTask ~ err:',
          err
        );
      },
    });
  }
}
