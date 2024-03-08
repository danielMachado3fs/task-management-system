import { NgModule } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { LoadingComponent } from './components/loading/loading.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  imports: [
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
  ],
  declarations: [LoadingComponent, CustomDatePipe],
  exports: [
    LoadingComponent,
    CustomDatePipe,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    InputTextareaModule,
  ],
  providers: [CustomDatePipe],
})
export class SharedModule {}
