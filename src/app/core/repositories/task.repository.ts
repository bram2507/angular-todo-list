import { Observable } from 'rxjs';

import { Task } from '@core/models/task.model';

export abstract class TaskRepository {
  abstract getTasks(): Observable<Task[]>;
  abstract addTask(task: Task): Observable<Task>;
  abstract updateTask(task: Task): Observable<void>;
  abstract deleteTask(id: number): Observable<void>;

  // abstract getTasks(): Task[];
  // abstract addTask(task: Task): Task;
  // abstract updateTask(task: Task): void;
  // abstract deleteTask(id: number): void;
}
