import mongoose from "mongoose";

export interface ITask {
	_id?: mongoose.Types.ObjectId;
	title: string;
	description: string;
	dueDate: Date;
	status: StatusTaskEnum;
	public: boolean;
	createdAt: Date;
	updatedAt: Date;
}

export interface TaskDocument extends ITask, mongoose.Document {
	_id?: mongoose.Types.ObjectId;
}

export const TaskSchema: mongoose.Schema<TaskDocument> =
	new mongoose.Schema<TaskDocument>(
		{
			title: { type: String, required: true },
			description: { type: String, required: true },
			dueDate: { type: Date, required: true },
			status: {
				type: String,
				enum: Object.values(StatusTaskEnum),
				required: true,
			},
			public: { type: Boolean, default: true },
		},
		{ timestamps: true },
	);
