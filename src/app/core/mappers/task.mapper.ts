import { TaskDTO } from '@infrastructure/dto/task.dto';

export class TaskMapper {
  static fromApiToDomain(apiTask: TaskDTO): TaskDTO {
    return {
      id: apiTask.id,
      description: apiTask.description,
      // completed: apiTask.completed,
    };
  }

  static fromDomainToApi(domainTask: TaskDTO): TaskDTO {
    return {
      id: domainTask.id,
      description: domainTask.description,
      // completed: domainTask.completed,
    };
  }
}
