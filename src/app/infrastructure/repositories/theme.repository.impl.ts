


import { Injectable } from '@angular/core';
import { Task } from '@core/models/task.model';
import { ThemeRepository } from '@core/repositories/theme.repository';
import { ThemeService } from '@infrastructure/services/theme.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeRepositoryImpl implements ThemeRepository {
  constructor(private themeService: ThemeService) {}

    // getTheme(): Observable<Theme> {
    //   return this.themeService.;
    // }

  //   addTask(task: Task): Observable<Task> {
  //     return this.taskService.addTask(task);
  //   }

  //   updateTask(task: Task): Observable<void> {
  //     return this.taskService.updateTask(task);
  //   }

  //   deleteTask(id: number): Observable<void> {
  //     return this.taskService.deleteTask(id);
  //   }
}
