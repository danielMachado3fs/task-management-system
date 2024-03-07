import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TaskDocument } from './entities/task.schema';

@Injectable()
export class TaskService {
	constructor(@InjectModel('task') private taskModel: Model<TaskDocument>) {}

	async create(createTaskDto: CreateTaskDto) {
		const newTask = await this.taskModel.create({
			_id: new Types.ObjectId(),
			...createTaskDto,
		});

		return newTask;
		// return newTask.save();
	}

	async findAll() {
		return await this.taskModel.find();
	}

	async find(filter?: FilterQuery<TaskDocument>) {
		return this.taskModel.find(filter);
	}

	async findOne(_id: string | Types.ObjectId) {
		return this.taskModel.findOne({ _id });
	}

	async update(_id: string | Types.ObjectId, updateTaskDto: UpdateTaskDto) {
		const res = await this.taskModel.updateOne({ _id }, { $set: updateTaskDto });
		return res.modifiedCount > 0;
	}

	async remove(_id: string | Types.ObjectId) {
		const res = await this.taskModel.deleteOne({ _id });
		return res.deletedCount > 0;
	}
}
