import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from '../shared/shared.module';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    TaskComponent,
    TaskFormComponent,
  ],
  imports: [
    ButtonModule,
    TaskRoutingModule,
    HttpClientModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers: [TaskService]
})
export class TaskModule { }
