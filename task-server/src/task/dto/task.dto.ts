import { PartialType } from '@nestjs/mapped-types';
import { Transform } from 'class-transformer';
import { IsBoolean, IsDateString, IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { StatusTaskEnum } from 'src/common/types';

export class CreateTaskDto {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsString()
	@IsNotEmpty()
	description: string;

	@IsDateString()
	@IsNotEmpty()
	dueDate: Date;

	@IsBoolean()
	@IsOptional()
	@Transform(({ value }) => (typeof value === 'string' ? (value.toLowerCase() === 'true' ? true : false) : value))
	isPublic: boolean;

	@IsString()
	@IsOptional()
	@IsEnum(StatusTaskEnum)
	status: StatusTaskEnum;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
	@IsOptional()
	@IsString()
	_id?: string;
}
