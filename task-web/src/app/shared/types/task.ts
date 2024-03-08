
export enum StatusTaskEnum {
  NOVA = 'Nova',
	ARQUIVADA = 'Arquivada',
	FINALIZADA = 'Finalizada',
}

export interface ITask {
  _id?: string;
  title: string;
  description: string;
  dueDate: Date;
  status: StatusTaskEnum;
  isPublic: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Task implements ITask {
  _id?: string;
  title: string;
  description: string;
  dueDate: Date;
  status: StatusTaskEnum;
  isPublic: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  constructor(
    _id: string | undefined = undefined,
    title = '',
    description = '',
    dueDate = new Date(),
    status = StatusTaskEnum.NOVA,
    isPublic = true,
    createdAt: Date | undefined = undefined,
    updatedAt: Date | undefined = undefined
  ) {
    this._id = _id;
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.status = status;
    this.isPublic = isPublic;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  static build(task: ITask): Task {
    return new Task(
      task._id,
      task.title,
      task.description,
      task.dueDate,
      task.status,
      task.isPublic,
      task.createdAt,
      task.updatedAt,
    )
  }
}
