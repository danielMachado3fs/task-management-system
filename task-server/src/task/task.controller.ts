import { Body, Controller, Delete, Get, Param, Patch, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthGuard } from 'src/auth/auth.guard';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
	constructor(private readonly taskService: TaskService) {}

	@Post()
	async create(@Body() createTaskDto: CreateTaskDto) {
		console.log('🚀 ~ TaskController ~ create ~ createTaskDto 🚀 ➡➡', createTaskDto);
		return { data: await this.taskService.create(createTaskDto) };
	}

	@Get()
	async findAll() {
		return { data: await this.taskService.findAll() };
	}

	@Get(':id')
	async findOne(@Param('id') _id: string) {
		console.log('🚀 ~ TaskController ~ findOne ~ _id 🚀 ➡➡', _id);
		return { data: await this.taskService.findOne(_id) };
	}

	@UseGuards(AuthGuard)
	@Patch(':id')
	async update(@Param('id') _id: string, @Body() updateTaskDto: UpdateTaskDto, @Res() res: Response) {
		const updated = await this.taskService.update(_id, updateTaskDto);
		if (updated) res.status(204).send();
		res.status(400).send();
	}

	@UseGuards(AuthGuard)
	@Delete(':id')
	remove(@Param('id') _id: string) {
		return this.taskService.remove(_id);
	}
}
