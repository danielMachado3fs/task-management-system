import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskComponent } from './task.component';

export const routes: Routes = [
  {
    path: 'tasks',
    children: [
      {
        path: '',
        component: TaskComponent,
      },
      {
        path: 'adicionar',
        component: TaskFormComponent,
      },
      {
        path: 'editar/:id',
        component: TaskFormComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskRoutingModule {}
