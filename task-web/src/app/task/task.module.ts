import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

@NgModule({
  declarations: [
    TaskComponent,
    TaskFormComponent,
  ],
  imports: [
    ButtonModule,
    TaskRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class TaskModule { }
