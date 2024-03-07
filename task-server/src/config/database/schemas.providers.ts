import { ModelDefinition } from '@nestjs/mongoose';
import { TaskSchema } from 'src/task/entities/task.schema';

export const TaskProvider: ModelDefinition = {
	name: 'task',
	schema: TaskSchema,
};

export const Providers: ModelDefinition[] = [TaskProvider];
