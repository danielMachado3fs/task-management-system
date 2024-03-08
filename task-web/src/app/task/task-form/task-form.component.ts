import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { StatusTaskEnum, Task } from 'src/app/shared/types/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss'],
})
export class TaskFormComponent implements OnInit {
  title = 'Adicionar Tarefa';
  formTask!: FormGroup;
  isSubmitting = false;
  isLoading = false;
  id: string | undefined = undefined;
  statusOptions = [
    { name: 'Nova', code: StatusTaskEnum.NOVA },
    { name: 'Arquivada', code: StatusTaskEnum.ARQUIVADA },
    { name: 'Finalizada', code: StatusTaskEnum.FINALIZADA },
  ];
  booleanOptions = [
    { name: 'Sim', code: true },
    { name: 'Não', code: false },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetector: ChangeDetectorRef
  ) {
    this.route.params.subscribe((params) => {
      if (params['id']) {
        this.id = params['id'];
      }
    });
  }

  ngOnInit(): void {
    if (this.id) {
      this.title = 'Editar Tarefa';
      this.fetchTask(this.id);
    } else {
      this.formCreate();
    }
  }

  fetchTask(_id: string) {
    this.isSubmitting = true;
    this.taskService.getTask(_id).subscribe({
      next: (res) => {
        const task = Task.build(res.data);
        this.formCreate(task);
        this.isSubmitting = false;
        this.changeDetector.detectChanges;
      },
    });
  }

  formCreate(task?: Task) {
    this.formTask = this.formBuilder.group({
      _id: [task?._id],
      title: [task?.title, [Validators.required]],
      description: [task?.description, [Validators.required]],
      dueDate: [task?.dueDate ? dayjs(task?.dueDate).format('YYYY-MM-DD') : undefined, [Validators.required]],
      status: [this.statusOptions.find(o => o.code == task?.status) ?? this.statusOptions[0], [Validators.required]],
      isPublic: [
        this.booleanOptions.find(o => o.code == task?.isPublic)?? this.booleanOptions[0],
        [Validators.required],
      ],
    });
  }

  saveTask() {
    this.isSubmitting = true;
    if (this.formTask.valid) {
      this.isLoading = true;
      let values = this.formTask.getRawValue();
      values.status = values.status.code;
      values.isPublic = values.isPublic.code;
      const task = Task.build(values);
      if(this.id) {
        this.taskService.updateTask(this.id, task).subscribe({
          next: (res) => {
            console.log("🚀 ~ TaskFormComponent ~ this.taskService.updateTask ~ res:", res)
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          },
          error: (err) => {
            console.log(
              '🚀 ~ TaskFormComponent ~ this.taskService.createTask ~ err:',
              err
            );
          },
        });
      }else {
        this.taskService.createTask(task).subscribe({
          next: (res) => {
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2000);
          },
          error: (err) => {
            console.log(
              '🚀 ~ TaskFormComponent ~ this.taskService.createTask ~ err:',
              err
            );
          },
        });
      }
    }
  }
}
