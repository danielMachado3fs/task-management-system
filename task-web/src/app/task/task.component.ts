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
        setTimeout(() => {
          this.tasks = res.data;
          this.isLoading = false;
        }, 2000);
      },
      error: (err) => {
        this.isLoading = false;
        this.taskService.showError();
      },
    });
  }

  taskDelete() {
    this.isLoadingPage = true;
    this.taskService.deleteTask(this.deletedId).subscribe({
      next: () => {
        this.taskService.showSuccess('Tarefa deletada com sucesso!');
        setTimeout(() => {
          this.tasks = this.tasks.filter((t) => t._id != this.deletedId);
          this.deletedId = '';
          this.toggleModal();
          this.isLoadingPage = false;
          this.changeDetector.detectChanges();
        }, 1000);
      },
      error: (err) => {
        setTimeout(() => {
          this.toggleModal();
          this.isLoadingPage = false;
        }, 1000)
        this.taskService.showError();
      },
    });
  }
}
