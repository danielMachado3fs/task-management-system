import { NgModule } from '@angular/core';
import { LoadingComponent } from './components/loading/loading.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [LoadingComponent,CustomDatePipe],
  exports: [LoadingComponent,CustomDatePipe],
  providers: [CustomDatePipe],
})
export class SharedModule {}
