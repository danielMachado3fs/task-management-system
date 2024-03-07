import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { TaskModule } from './task/task.module';

@Module({
	imports: [DatabaseModule, TaskModule],
	exports: [DatabaseModule],
})
export class AppModule {}
